import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// These colors are so light the color name should be rendered black
const lightColors = ['pearlWhite', 'white'];

const Wrapper = styled.div`
  border: 1px solid #000;
  margin: 5px;
`;

const StyledColor = styled.div`
  background-color: ${props => props.theme[props.color]};
  width: 120px;
  height: 120px;
  border: 2px solid #fff;
  font-family: "Avenir Next", Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: ${props => (lightColors.indexOf(props.color) >= 0 ? '#000' : '#fff')};
  padding: 5px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Colors = ({ name, value }) => (
  <Wrapper>
    <StyledColor color={name}>
      <span>{name}</span>
      <span style={{ fontFamily: 'monospace' }}>{value}</span>
    </StyledColor>
  </Wrapper>
);

Colors.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Colors;
