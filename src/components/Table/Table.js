import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
  width: 100%;
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
  color: ${props => props.textColor};
  overflow: auto;

  ${Row},
  ${Header} {
    border-bottom: ${props => (props.showBorders ? `solid 1px ${props.borderColor}` : '')};
    min-width: ${props => props.minWidth};
  }

  ${Header} {
    background: ${props => props.headerColor};
  }

  ${Row} {
    background: ${props => props.rowColor};
    &:not(:last-of-type) {
      border-bottom: ${props => (props.showBorders ? `solid 1px ${props.borderColor}` : '')};
    }
    &:nth-child(odd) {
      ${props => (props.alternatingRowColors ? `background: ${props.alternateRowColor}` : '')};
    }
  }

  ${Cell} {
    &:not(:last-of-type) {
      border-right: ${props => (props.showBorders ? `solid 1px ${props.borderColor}` : '')};
    }
  }
`;

const Table = ({ children, alternatingRowColors, showBorders, appearance, minWidth }) => {
  const { headerColor, rowColor, textColor, alternateRowColor, borderColor } = colors[appearance];

  return (
    <StyledTable
      alternatingRowColors={alternatingRowColors}
      showBorders={showBorders}
      headerColor={headerColor}
      rowColor={rowColor}
      textColor={textColor}
      alternateRowColor={alternateRowColor}
      borderColor={borderColor}
      minWidth={minWidth}
    >
      {children}
    </StyledTable>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  alternatingRowColors: PropTypes.bool,
  showBorders: PropTypes.bool,
  appearance: PropTypes.oneOf(['light', 'dark']),
  minWidth: PropTypes.string
};

Table.defaultProps = {
  alternatingRowColors: true,
  appearance: 'light',
  showBorders: false,
  minWidth: 0
};

Table.Cell = Cell;
Table.Row = Row;
Table.Header = Header;

export default Table;
