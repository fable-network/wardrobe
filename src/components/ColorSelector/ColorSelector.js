import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const ColorWrapper = styled.span`
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0px 0px 0px 1px #cecece;
  border: 2px solid #FFF;
  cursor: ${props => (props.isStatic ? 'default' : 'pointer')};
  transform: ${props => (props.isStatic ? 'scale(1);' : 'scale(.8);')};
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px 0 2px;
  overflow: hidden;
  padding: 1em;
  transition: all .3s ease;
  background: ${props => props.background};
  &:hover {
    transform: scale(1);
  }
`;

const ColorSelector = ({ onClick, patternImage, color }) => (
  <ColorWrapper
    isStatic={!onClick} // maybe not have this handled by the click listener?
    background={patternImage || color}
    onClick={onClick}
  />
);

ColorSelector.propTypes = {
  color: PropTypes.string,
  patternImage: PropTypes.string //overrides color if available
};

ColorSelector.defaultProps = {

}

export default ColorSelector;
