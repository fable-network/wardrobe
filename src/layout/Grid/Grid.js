import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { marginHorizontal } from '../../helpers/styled';
import { theme as defaultTheme } from '../../theme';
import GridCell, { COLUMNS_MOBILE, COLUMNS_TABLET_UP } from '../GridCell/GridCell';

function getJustify({ align }) {
  switch (align) {
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
}

const Grid = styled(({ align, children, ...otherProps }) => <div {...otherProps}>{children}</div>)`
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  justify-content: ${getJustify};
  ${p => marginHorizontal(`calc(-${p.theme.gridGutterWidth} / 2)`)};
  min-width: calc(${p => p.theme.gridGutterWidth} * ${COLUMNS_MOBILE});
  ${p => (p.theme.tablet_up || defaultTheme.tablet_up)`
    min-width: calc(${p.theme.gridGutterWidth} * ${COLUMNS_TABLET_UP});
  `};
`;

Grid.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
};

Grid.defaultProps = {};

Grid.Cell = GridCell;

/** @component */
export default Grid;
