import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getBodyFontSize = () => {
  const { fontSize } = window.getComputedStyle(document.getElementsByTagName('body')[0]);
  return parseInt(fontSize, 10);
};

const GridBase = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='${p =>
    p.size}' width='${p => p.size}'%3E%3Crect width='${p => p.size}' height='${p =>
  p.size}' rx='0' ry='0' style='fill:white; stroke: #cbcbcb; stroke-width: 1px;' /%3E%3C/svg%3E%0A");
  padding: 8px;
  > * {
    opacity: 0.8;
  }
`;

const Grid = ({ children }) => <GridBase size={getBodyFontSize() / 2}>{children}</GridBase>;
Grid.propTypes = { children: PropTypes.node };

export default Grid;
