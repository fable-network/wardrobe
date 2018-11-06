import PropTypes from 'prop-types';
import styled from 'styled-components';
import { marginHorizontal } from '../../helpers/styled';
import GridCell from '../GridCell';

function getJustify({ align }) {
  switch (align) {
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
}

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  justify-content: ${getJustify};
  ${p => marginHorizontal(`calc(-${p.theme.gridGutterWidth} / 2)`)};
`;

Grid.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
};

Grid.defaultProps = {};

Grid.Cell = GridCell;

/** @component */
export default Grid;
