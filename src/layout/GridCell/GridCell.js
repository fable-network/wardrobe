import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { theme as defaultTheme } from '../../theme';
import { paddingHorizontal } from '../../helpers/styled';

const propTypes = {
  /** Amount of columns to take. Is overwritten by any of the specific rules. */
  columns: PropTypes.number,
  /** Amount of columns to take on mobile (out of 6). */
  mobile: PropTypes.number,
  /** Amount of columns to take on tablet (out of 6). */
  tablet: PropTypes.number,
  /** Amount of columns to take on desktop (out of 12). */
  desktop: PropTypes.number,
  /** Amount of columns to take on widescreen (out of 12). */
  wide: PropTypes.number,
  /** Amount of columns to offset. Is overwritten by any of the specific rules. */
  offset: PropTypes.number,
  /** Amount of columns to offset on mobile (max 5). */
  offsetMobile: PropTypes.number,
  /** Amount of columns to offset on tablet (max 5). */
  offsetTablet: PropTypes.number,
  /** Amount of columns to offset on desktop (max 11). */
  offsetDesktop: PropTypes.number,
  /** Amount of columns to offset on widescreen (max 11). */
  offsetWide: PropTypes.number,
};

export const COLUMNS_MOBILE = 6;
export const COLUMNS_TABLET_UP = 12;

const generateColumn = (columns, maxColumns) => `
  width: ${(columns * 100) / maxColumns}%;
`;

const generateOffset = (offset, maxColumns) => `
  margin-left: ${(offset * 100) / maxColumns}%;
  [data-grid-direction="rtl"] > & {
    margin-right: ${(offset * 100) / maxColumns}%;
    margin-left: 0;
  }
`;

const cellBasicCss = css`
  display: block;
  ${p => generateColumn(p.columns, COLUMNS_MOBILE)};
  ${p => p.offset && generateOffset(p.offset, COLUMNS_MOBILE)};
  ${p => (p.theme.tablet_up || defaultTheme.tablet_up)`
    ${generateColumn(p.columns, COLUMNS_TABLET_UP)};
    ${generateOffset(p.offset, COLUMNS_TABLET_UP)};
  `};
`;

const cellMobileCss = css`
  ${p => (p.theme.mobile || defaultTheme.mobile)`
    ${p.mobile && generateColumn(p.mobile, COLUMNS_MOBILE)};
    ${p.offsetMobile && generateOffset(p.offsetMobile, COLUMNS_MOBILE)};
  `};
`;

const cellTabletCss = css`
  ${p => (p.theme.tablet || defaultTheme.tablet)`
    ${p.tablet && generateColumn(p.tablet, COLUMNS_TABLET_UP)};
    ${p.offsetTablet && generateOffset(p.offsetTablet, COLUMNS_TABLET_UP)};
  `};
`;

const cellDesktopCss = css`
  ${p => (p.theme.desktop || defaultTheme.desktop)`
    ${p.desktop && generateColumn(p.desktop, COLUMNS_TABLET_UP)};
    ${p.offsetDesktop && generateOffset(p.offsetDesktop, COLUMNS_TABLET_UP)};
  `};
`;

const cellWideCss = css`
  ${p => (p.theme.wide || defaultTheme.wide)`
    ${p.wide && generateColumn(p.wide, COLUMNS_TABLET_UP)};
    ${p.offsetWide && generateOffset(p.offsetWide, COLUMNS_TABLET_UP)};
  `};
`;

// An intermediary component to avoid passing some props to html elements
const GridCellInternal = ({
  columns,
  mobile,
  tablet,
  desktop,
  wide,
  offset,
  offsetMobile,
  offsetTablet,
  offsetDesktop,
  offsetWide,
  children,
  ...otherProps
}) => <div {...otherProps}>{children}</div>;
GridCellInternal.propTypes = {
  ...propTypes,
  children: PropTypes.node,
};

/**
 * @visibleName Grid.Cell
 */
const GridCell = styled(GridCellInternal)`
  box-sizing: border-box;
  overflow: visible;
  ${p => paddingHorizontal(`calc(${p.theme.gridGutterWidth} / 2)`)};
  ${cellBasicCss};
  ${cellMobileCss};
  ${cellTabletCss};
  ${cellDesktopCss};
  ${cellWideCss};
`;

GridCell.propTypes = propTypes;

GridCell.defaultProps = {
  offset: 0,
  columns: 1,
};

/** @component */
export default GridCell;
