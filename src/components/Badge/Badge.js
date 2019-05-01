import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pulseInfinite } from '../../animations';

const getBorderRadius = ({ size, radius, theme }) => {
  switch (radius) {
    case 'none':
      return '0';
    case 'small':
      return theme.borderRadiusSmall;
    case 'large':
    default:
      return size === 'large' ? '1.75em' : '1em';
  }
};

const getSize = ({ size, theme }) => {
  switch (size) {
    case 'small':
      return css`
        padding: 1px 0.75em 1px;
        font-size: ${theme.fontSizeXSmall};
        line-height: ${theme.lineHeightXSmall};
      `;
    case 'large':
      return `
        padding: calc(0.5em - 1px) 1.5rem;
        font-size: ${theme.fontSizeBase};
        line-height: ${theme.lineHeightBase};
      `;
    case 'normal':
    default:
      return css`
        padding: 1px 0.75em 1px;
        font-size: ${theme.fontSizeSmall};
        line-height: ${theme.lineHeightSmall};
      `;
  }
};

const cssPrimary = css`
  background-color: ${p => (p.inverse ? p.theme.white : p.theme.primary)};
  color: ${p => (p.inverse ? p.theme.primary : p.theme.white)};
  border-color: ${p => p.theme.primary};
`;

const cssSecondary = css`
  background-color: ${p => (p.inverse ? p.theme.white : p.theme.grey03)};
  color: ${p => (p.inverse ? p.theme.grey03 : p.theme.white)};
  border-color: ${p => p.theme.grey03};
`;

const cssSuccess = css`
  background-color: ${p => (p.inverse ? p.theme.white : p.theme.success)};
  color: ${p => (p.inverse ? p.theme.success : p.theme.white)};
  border-color: ${p => p.theme.success};
`;

const cssDanger = css`
  background-color: ${p => (p.inverse ? p.theme.white : p.theme.danger)};
  color: ${p => (p.inverse ? p.theme.danger : p.theme.white)};
  border-color: ${p => p.theme.danger};
`;

const cssWarning = css`
  background-color: ${p => (p.inverse ? p.theme.white : p.theme.warning)};
  color: ${p => (p.inverse ? p.theme.warning : p.theme.white)};
  border-color: ${p => p.theme.warning};
`;

const cssInfo = css`
  background-color: ${p => (p.inverse ? p.theme.white : p.theme.info)};
  color: ${p => (p.inverse ? p.theme.info : p.theme.white)};
  border-color: ${p => p.theme.info};
`;

const cssLight = css`
  background-color: ${p => (p.inverse ? p.theme.white : p.theme.grey03)};
  color: ${p => (p.inverse ? p.theme.grey03 : p.theme.grey01)};
  border-color: ${p => p.theme.grey03};
`;

const cssDark = css`
  background-color: ${p => (p.inverse ? p.theme.white : p.theme.grey01)};
  color: ${p => (p.inverse ? p.theme.grey01 : p.theme.white)};
  border-color: ${p => p.theme.grey01};
`;

const cssAnimated = css`
  animation: ${pulseInfinite} 3s infinite ease;
`;

const BadgeWrapper = styled('span')`
  display: inline-block;
  ${getSize};
  border-radius: ${getBorderRadius};
  text-align: center;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};
  border: solid 1px;
  ${p => p.appearance === 'primary' && cssPrimary};
  ${p => p.appearance === 'secondary' && cssSecondary};
  ${p => p.appearance === 'success' && cssSuccess};
  ${p => p.appearance === 'danger' && cssDanger};
  ${p => p.appearance === 'warning' && cssWarning};
  ${p => p.appearance === 'info' && cssInfo};
  ${p => p.appearance === 'light' && cssLight};
  ${p => p.appearance === 'dark' && cssDark};
  ${p => p.animated && cssAnimated};
`;

const Badge = ({ appearance, children, animated, radius, size, inverse, ...otherProps }) => (
  <BadgeWrapper
    appearance={appearance}
    animated={animated}
    radius={radius}
    size={size}
    inverse={inverse}
    {...otherProps}
  >
    {children}
  </BadgeWrapper>
);

Badge.defaultProps = {
  appearance: 'primary',
  children: null,
  animated: false,
  radius: 'large',
  size: 'normal',
  inverse: false,
};

Badge.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  children: PropTypes.node,
  animated: PropTypes.bool,
  radius: PropTypes.oneOf(['large', 'small', 'none']),
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  inverse: PropTypes.bool,
};

export default Badge;
