import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { fullCircleRotate } from '../../constants/Animations';
import defaultTheme from '../../theme/default';

const colors = {
  primary: defaultTheme.skyBlue,
  secondary: defaultTheme.stoneGrey,
  success: defaultTheme.limeGreen,
  danger: defaultTheme.flameRed,
  warning: defaultTheme.apricotOrange,
  light: defaultTheme.pearlWhite,
  dark: defaultTheme.ravenBlack,
};

const StyledSpinner = styled.span`
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};
  border: calc(${props => props.size} / 10) solid ${props => props.color};
  border-left-color: ${props => props.gapColor};
  border-radius: 100%;
  animation: ${fullCircleRotate} ${props => props.speed} linear infinite;
`;

const LoadingSpinner = ({ size, speed, appearance, ...props }) => {
  const defaultColor = colors[appearance];
  const defaultGapColor = `${defaultColor}25`;

  return (
    <StyledSpinner
      size={size}
      color={props.color || defaultColor}
      speed={speed}
      gapColor={props.color ? `${props.color}25` : defaultGapColor}
    />
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  speed: PropTypes.string,
  color: PropTypes.string,
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark'
  ]),
};

LoadingSpinner.defaultProps = {
  size: '20px',
  speed: '1s',
  appearance: 'primary'
};

export default withTheme(LoadingSpinner);
