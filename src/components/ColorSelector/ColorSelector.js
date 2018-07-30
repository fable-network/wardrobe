import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const ColorWrapper = styled('span')`
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0px 0px 0px 1px #cecece;
  border: 2px solid #FFF;
  cursor: ${props => (props.isStatic ? 'default' : 'pointer')};
  transform: ${props => (props.isStatic || props.selected ? 'scale(1);' : 'scale(.8);')};
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px 0 2px;
  overflow: hidden;
  padding: 1em;
  transition: all .3s ease;
  background: ${props => (props.patternImage
    ? `url(${props.patternImage}) no-repeat 50% 50%`
    : props.color
  )};
  &:hover {
    transform: scale(1);
  }
`;

const TextWrapper = styled('span')`
  vertical-align: middle;
  margin-left: 2px;
  font-weight: ${props => (props.selected ? 500 : 400)};
`;

const ColorSelector = ({ onClick, patternImage, color, isStatic, text, selected }) => (
  <div>
    <ColorWrapper
      isStatic={isStatic}
      patternImage={patternImage}
      color={color}
      onClick={!isStatic ? onClick : null}
      selected={selected}
    />
    {text && <TextWrapper selected={selected}>{text}</TextWrapper>}
  </div>
);

ColorSelector.defaultProps = {
  color: '#FFF',
  selected: false,
  isStatic: false
}

ColorSelector.propTypes = {
  color: PropTypes.string,
  patternImage: PropTypes.string, //overrides color if available
  onClick: PropTypes.func,
  isStatic: PropTypes.bool, // ignores click handler if true
  text: PropTypes.string,
  selected: PropTypes.bool 
};


export default ColorSelector;
