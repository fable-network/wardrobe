import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getColor = (appearance, theme) => {
  switch (appearance) {
    case 'success':
      return theme.success;
    case 'danger':
      return theme.danger;
    case 'warning':
      return theme.warning;
    case 'secondary':
      return theme.grey02;
    case 'primary':
    default:
      return theme.primary;
  }
};

const getColorActive = (appearance, theme) => {
  switch (appearance) {
    case 'success':
      return theme.success;
    case 'danger':
      return theme.danger;
    case 'warning':
      return theme.warning;
    case 'secondary':
      return theme.grey01;
    case 'primary':
    default:
      return theme.primaryActive;
  }
};

const IconButton = styled(({ appearance, children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
))`
  display: inline-block;
  outline: none;
  border: none;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  margin: 0;
  padding: ${p => p.theme.paddingHorizontalSmall};
  background: none;
  color: ${p => (p.disabled ? p.theme.grey04 : getColor(p.appearance, p.theme))};
  &,
  &:link,
  &:active,
  &:hover,
  &:focus,
  &:visited {
    text-decoration: none;
  }
  &:hover,
  &:active,
  &:focus {
    color: ${p => (p.disabled ? p.theme.grey04 : getColorActive(p.appearance, p.theme))};
  }
`;

IconButton.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  appearance: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
};

IconButton.defaultProps = {
  disabled: false,
  type: 'button',
  appearance: 'primary',
};

/** @component */
export default IconButton;
