import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { fullCircleRotate } from '../../animations';
import defaultTheme from '../../theme/default';

const colors = {
  primary: defaultTheme.primary,
  secondary: defaultTheme.dark,
  success: defaultTheme.success,
  danger: defaultTheme.danger,
  warning: defaultTheme.warning,
  light: defaultTheme.lighter,
  dark: defaultTheme.darkest,
};

const StyledSpinner = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: ${props => props.size};
  height: ${props => props.size};
  border: calc(${props => props.size} / 10) solid ${props => props.color};
  border-left-color: ${props => props.gapColor};
  border-radius: 100%;
  animation: ${fullCircleRotate()} ${props => props.speed} linear infinite;
`;

const LoadingSpinner = ({ size, speed, appearance, ...otherProps }) => {
  const defaultColor = colors[appearance];
  const defaultGapColor = `${defaultColor}25`;

  return (
    <StyledSpinner
      {...otherProps}
      size={size}
      color={otherProps.color || defaultColor}
      speed={speed}
      gapColor={otherProps.color ? (otherProps.gapColor || 'transparent') : defaultGapColor}
    />
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  speed: PropTypes.string,
  color: PropTypes.string,
  gapColor: PropTypes.string,
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark',
  ]),
};

LoadingSpinner.defaultProps = {
  size: '20px',
  speed: '1s',
  appearance: 'primary',
};

export default withTheme(LoadingSpinner);
