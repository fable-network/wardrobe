import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import defaultTheme from '../../theme/default';

const colors = {
  light: {
    headerColor: '#efefef',
    rowColor: defaultTheme.white,
    textColor: '#595959',
    borderColor: defaultTheme.stoneGrey,
    alternateRowColor: defaultTheme.pearlWhite
  },
  dark: {
    headerColor: '#5b5c5e',
    rowColor: defaultTheme.ravenBlack,
    textColor: defaultTheme.white,
    borderColor: defaultTheme.stoneGrey,
    alternateRowColor: '#424344'
  }
};

const Cell = styled('div')`
  overflow: hidden;
  flex-grow: 1;
  width: ${props => (100 / props.numberOfColumns) * props.widthWeight}%;
  min-height: 1px;
  padding: 10px;
  text-overflow: ellipsis;
  white-space: ${props => (props.singleLine ? 'nowrap' : 'initial')};
  box-sizing: border-box;
`;

const Row = styled('div')`
  display: flex;
  align-items: stretch;

  ${Cell} {
    font-size: 87.5%;
  }
`;

const Header = Row.extend`
  ${props => (props.background ? `background: ${props.background}` : '')};
  ${Cell} {
    font-weight: 600;
    font-size: 100%;
  }
`;

const StyledTable = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${props => props.background};
  border: ${props => (props.showBorders ? `solid 1px ${props.borderColor}` : '')};
  border-right: none;
  border-top: none;
  color: ${props => props.textColor};
  overflow: auto;

  ${Header} {
    background: ${props => props.headerColor};
    min-width: ${props => props.minWidth};
  }

  ${Row} {
    min-width: ${props => props.minWidth};
    background: ${props => props.rowColor};
    cursor: ${props => (props.interactable ? 'pointer' : 'initial')};
    transition: background .1s linear;
    &:nth-child(odd) {
      background: ${props => (props.alternateColors ? props.alternateRowColor : props.rowColor)};
    }
    &:hover {
      background: ${props => props.hoverRowColor};
    }
  }

  ${Cell} {
    border: ${props => (props.showBorders ? `solid 1px ${props.borderColor}` : '')};
    border-bottom: none;
    border-left: none;
  }
`;

const addWeightToCells = (row, tableLayout) => {
  if (!row || !row.props) {
    return row;
  }

  const { children } = row.props;

  if (!children.length) {
    return row;
  }
  const layout = row.props.layout || tableLayout || [];
  const numberOfColumns = children.filter(child => child.type.displayName === 'Table__Cell').length;
  let cellIndex = -1;
  return children.map(child => {
    if (child.type.displayName === 'Table__Cell') {
      cellIndex += 1;
      return {
        ...child,
        props: {
          widthWeight: layout[cellIndex] || 1,
          numberOfColumns,
          ...child.props
        }
      };
    }
    return child;
  });
};

const Table = (props) => {
  const { children, alternatingRowColors, showBorders, appearance, minWidth, interactable } = props;
  const { headerColor, rowColor, textColor, alternateRowColor, borderColor } = colors[appearance];
  let modifiedChildren = children;
  if (children && children.length) {
    modifiedChildren = children.map(child => {
      debugger;
      const componentName = child.type && child.type.displayName;
      if (componentName === 'Table__Row' || componentName === 'Table__Header') {
        return {
          ...child,
          props: {
            ...child.props,
            children: addWeightToCells(child, props.layout)
          }
        };
      }
      return child;
    });
  }

  return (
    <StyledTable
      alternateColors={alternatingRowColors}
      showBorders={showBorders}
      headerColor={headerColor}
      rowColor={rowColor}
      textColor={textColor}
      alternateRowColor={alternateRowColor}
      borderColor={borderColor}
      minWidth={minWidth}
      interactable={interactable}
      hoverRowColor={interactable && darken(0.15, rowColor)}
    >
      {modifiedChildren}
    </StyledTable>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  alternatingRowColors: PropTypes.bool,
  showBorders: PropTypes.bool,
  appearance: PropTypes.oneOf(['light', 'dark']),
  minWidth: PropTypes.string,
  interactable: PropTypes.bool,
  /** an array of integers that defines the ratio between columns */
  layout: PropTypes.array
};

Table.defaultProps = {
  alternatingRowColors: true,
  appearance: 'light',
  showBorders: false,
  minWidth: '0px',
  interactable: false,
  layout: []
};

Table.Cell = Cell;
Table.Row = Row;
Table.Header = Header;
Table.Cell.type = {
  displayName: 'Table__Cell'
};
Table.Row.type = {
  displayName: 'Table__Row'
};
Table.Header.type = {
  displayName: 'Table__Header'
};

export default Table;
