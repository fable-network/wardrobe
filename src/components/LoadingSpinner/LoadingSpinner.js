import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { hexToRgba } from '../../helpers/colors';
import { fullCircleRotate } from '../../animations';
import defaultTheme from '../../theme/default';

const colors = {
  primary: defaultTheme.primary,
  secondary: defaultTheme.grey03,
  success: defaultTheme.success,
  danger: defaultTheme.danger,
  warning: defaultTheme.warning,
  light: defaultTheme.grey05,
  dark: defaultTheme.grey01,
};

const StyledSpinner = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: ${p => p.size};
  height: ${p => p.size};
  border: calc(${p => p.size} / 10) solid ${p => p.color};
  border-left-color: ${p => p.gapColor};
  border-radius: 100%;
  animation: ${fullCircleRotate()} ${p => p.speed} linear infinite;
`;

const LoadingSpinner = ({ size, speed, appearance, ...otherProps }) => {
  const defaultColor = colors[appearance];
  const defaultGapColor = hexToRgba(defaultColor, 0.25);

  return (
    <StyledSpinner
      {...otherProps}
      size={size}
      color={otherProps.color || defaultColor}
      speed={speed}
      gapColor={otherProps.color ? otherProps.gapColor || 'transparent' : defaultGapColor}
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
