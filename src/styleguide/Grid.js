import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getBodyFontSize = () => {
  const { fontSize } = window.getComputedStyle(document.getElementsByTagName('body')[0]);
  return parseInt(fontSize, 10);
};

const GridBase = styled.div`
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"  height="${p =>
    p.size}" width="${p => p.size}"><rect width="${p => p.size}" height="${p =>
  p.size}" rx="0" ry="0" fill="transparent" stroke-width="1" stroke="gainsboro" /></svg>');
  padding: 8px;
  background-repeat: repeat;
  > * {
    opacity: 0.8;
  }
`;

const Grid = ({ children }) => <GridBase size={getBodyFontSize() / 4}>{children}</GridBase>;
Grid.propTypes = { children: PropTypes.node };

export default Grid;
