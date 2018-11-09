import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { marginHorizontal } from '../../helpers/styled';
import { theme as defaultTheme } from '../../theme';
import GridCell, { COLUMNS_MOBILE, COLUMNS_TABLET_UP } from '../GridCell/GridCell';

function getDirection({ direction }) {
  switch (direction) {
    case 'rtl':
      return 'row-reverse';
    case 'ltr':
    default:
      return 'row';
  }
}

const Grid = styled(({ direction, children, ...otherProps }) => (
  <div {...otherProps} data-grid-direction={direction}>
    {children}
  </div>
))`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: ${getDirection};
  box-sizing: border-box;
  ${p => marginHorizontal(`calc(-${p.theme.gridGutterWidth} / 2)`)};
  min-width: calc(${p => p.theme.gridGutterWidth} * ${COLUMNS_MOBILE});
  ${p => (p.theme.tablet_up || defaultTheme.tablet_up)`
    min-width: calc(${p.theme.gridGutterWidth} * ${COLUMNS_TABLET_UP});
  `};
`;

Grid.propTypes = {
  direction: PropTypes.oneOf(['ltr', 'rtl']),
};

Grid.defaultProps = {
  direction: 'ltr',
};

Grid.Cell = GridCell;

/** @component */
export default Grid;
