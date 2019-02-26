import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pulseInfinite } from '../../animations';

const cssPrimary = css`
  background-color: ${p => p.theme.primary};
`;

const cssSecondary = css`
  background-color: ${p => p.theme.grey03};
`;

const cssSuccess = css`
  background-color: ${p => p.theme.success};
`;

const cssDanger = css`
  background-color: ${p => p.theme.danger};
`;

const cssWarning = css`
  background-color: ${p => p.theme.warning};
`;

const cssLight = css`
  background-color: ${p => p.theme.backgroundSecondary};
  color: ${p => p.theme.grey01};
`;

const cssDark = css`
  background-color: ${p => p.theme.grey01};
`;

const cssAnimated = css`
  animation: ${pulseInfinite} 3s infinite ease;
`;

const BadgeWrapper = styled('span')`
  display: inline-block;
  padding: 0.2em 0.8em;
  font-size: 80%;
  border-radius: 1em;
  text-align: center;
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};
  line-height: 1;
  ${p => p.appearance === 'primary' && cssPrimary};
  ${p => p.appearance === 'secondary' && cssSecondary};
  ${p => p.appearance === 'success' && cssSuccess};
  ${p => p.appearance === 'danger' && cssDanger};
  ${p => p.appearance === 'warning' && cssWarning};
  ${p => p.appearance === 'light' && cssLight};
  ${p => p.appearance === 'dark' && cssDark};
  ${p => p.animated && cssAnimated};
`;

const Badge = ({ appearance, children, animated }) => (
  <BadgeWrapper appearance={appearance} animated={animated}>
    {children}
  </BadgeWrapper>
);

Badge.defaultProps = {
  appearance: 'primary',
  children: null,
  animated: false
};

Badge.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark'
  ]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animated: PropTypes.bool
};

export default Badge;
