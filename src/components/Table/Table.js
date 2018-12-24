import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash.get';
import defaultTheme from '../../theme/default';

const colors = {
  light: {
    headerColor: defaultTheme.grey05,
    rowColor: defaultTheme.white,
    textColor: defaultTheme.grey01,
    borderColor: defaultTheme.grey03,
    alternateRowColor: defaultTheme.backgroundSecondary,
  },
  dark: {
    headerColor: defaultTheme.grey02,
    rowColor: defaultTheme.grey01,
    textColor: defaultTheme.white,
    borderColor: defaultTheme.grey03,
    alternateRowColor: '#424344',
  },
};

const Cell = styled('div')`
  overflow: hidden;
  flex-grow: 1;
  width: ${p => (100 / p.numberOfColumns) * p.widthWeight || 100}%;
  min-height: 1px;
  padding: 10px;
  text-overflow: ellipsis;
  white-space: ${p => (p.singleLine ? 'nowrap' : 'initial')};
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
  ${p => (p.background ? `background: ${p.background}` : '')};
  ${Cell} {
    font-weight: 600;
    font-size: 100%;
  }
`;

const StyledTable = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${p => p.background};
  border: ${p => (p.showBorders ? `solid 1px ${p.borderColor}` : '')};
  border-right: none;
  border-top: none;
  color: ${p => p.textColor};
  overflow: ${p => (p.minWidth !== '0' ? 'auto' : 'initial')};

  ${Header} {
    background: ${p => p.headerColor};
    min-width: ${p => p.minWidth};
  }

  ${Row} {
    min-width: ${p => p.minWidth};
    background: ${p => p.rowColor};
    transition: background 0.1s linear;
    &:nth-child(odd) {
      background: ${p => (p.alternateColors ? p.alternateRowColor : p.rowColor)};
    }
  }

  ${Cell} {
    border: ${p => (p.showBorders ? `solid 1px ${p.borderColor}` : '')};
    border-bottom: none;
    border-left: none;
  }
`;

// Checks if a component (or its target) is of a certain type (Cell, or Row)
const isComponentTypeOf = (type, component) => {
  if (!component || !component.type) {
    return false;
  }

  const componentName = get(component, 'type.displayName', '');
  const targetName = get(component, 'type.target.displayName', '');

  // true if the component name matches the type, or the component target name matches the type.
  return componentName === type || targetName === type;
};

const isTableRow = component => isComponentTypeOf('Table__Row', component);

const isTableCell = component => isComponentTypeOf('Table__Cell', component);

const addWeightToCells = (row, tableLayout) => {
  const children = get(row, 'props.children');
  if (!children || !children.length) {
    return row;
  }

  const layout = get(row, 'props.layout') || tableLayout || [];
  const numberOfColumns = children.filter(isTableCell).length;
  let cellIndex = -1;

  return children.map(child => {
    if (isTableCell(child)) {
      cellIndex += 1;
      return {
        ...child,
        props: {
          widthWeight: layout[cellIndex] || 1,
          numberOfColumns,
          ...child.props,
        },
      };
    }
    return child;
  });
};

// Looks for rows and nested rows within a component and modifies its cells.
const recursivelyModifyRows = (component, layout) => {
  if (typeof component !== 'object') {
    return component;
  }
  // is a row then modify its cells.
  if (isTableRow(component)) {
    return {
      ...component,
      props: {
        ...component.props,
        children: addWeightToCells(component, layout),
      },
    };
  }

  // is an array then flatten and modify its cells.
  if (component.length) {
    return component.map(child => recursivelyModifyRows(child, layout));
  }

  // is a non-row element, then look for a row in it's children.
  const children = get(component, 'props.children');
  if (children) {
    return {
      ...component,
      props: {
        ...component.props,
        children: recursivelyModifyRows(children, layout),
      },
    };
  }
  return component;
};

const Table = props => {
  const {
    children,
    alternatingRowColors,
    showBorders,
    appearance,
    minWidth,
    layout,
    ...otherProps
  } = props;
  const { headerColor, rowColor, textColor, alternateRowColor, borderColor } = colors[appearance];
  let modifiedChildren = children;
  if (children && children.length) {
    modifiedChildren = children.map(child => recursivelyModifyRows(child, layout));
  } else if (isTableRow(children)) {
    // single row table
    modifiedChildren = recursivelyModifyRows(children, layout);
  }

  return (
    <StyledTable
      {...otherProps}
      alternateColors={alternatingRowColors}
      showBorders={showBorders}
      headerColor={headerColor}
      rowColor={rowColor}
      textColor={textColor}
      alternateRowColor={alternateRowColor}
      borderColor={borderColor}
      minWidth={minWidth}
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
  /** an array of integers that defines the ratio between columns */
  layout: PropTypes.array,
};

Table.defaultProps = {
  alternatingRowColors: true,
  appearance: 'light',
  showBorders: false,
  minWidth: '0',
  layout: [],
};

Table.Cell = Cell;
Table.Row = Row;
Table.Header = Header;

export default Table;
