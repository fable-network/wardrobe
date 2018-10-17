import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const cssPrimary = css`
  color: ${p => p.theme.lighter};
  background-color: ${p => p.theme.primary};
  border-color: ${p => p.theme.primary};

  &:hover {
    background-color: ${p => p.theme.primaryActive};
    border-color: ${p => p.theme.primaryActive};
  }

  &:disabled,
  &:hover:disabled {
    background-color: ${p => p.theme.disabled};
    border-color: ${p => p.theme.disabled};
  }
`;

const cssSecondary = css`
  color: ${p => p.theme.primary};
  background-color: ${p => p.theme.lightest};
  border-color: ${p => p.theme.primary};

  &:hover {
    color: ${p => p.theme.primaryActive};
    border-color: ${p => p.theme.primaryActive};
  }

  &:disabled,
  &:hover:disabled {
    background-color: ${p => p.theme.lightest};
    color: ${p => p.theme.disabled};
    border-color: ${p => p.theme.disabled};
  }
`;

const cssSmall = css`
  ${p => p.theme.fontSizeSmall};
  ${p => p.theme.paddingHorizontalSmall};
  ${p => p.theme.controlHeightSmall};
`;

/**
 * An element of a graphical user interface which a user can select to perform a particular action.
 */
const Button = styled(({ size, appearance, children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
))`
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  line-height: 1;
  ${p => p.theme.fontSizeBase};
  ${p => p.theme.paddingHorizontalBase};
  ${p => p.theme.controlHeightBase};
  border: solid 1px transparent;
  transition: border-color 150ms linear, background-color 150ms linear, box-shadow 150ms linear;
  cursor: pointer;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: inherit;
  font-weight: normal;

  &:hover {
    ${p => p.theme.shadow};
    transition: border-color 150ms linear, background-color 150ms linear, box-shadow 150ms linear;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:disabled {
    ${p => p.theme.noShadow};
  }

  ${p => p.appearance === 'primary' && cssPrimary};
  ${p => p.appearance === 'secondary' && cssSecondary};
  ${p => p.size === 'small' && cssSmall};
`;

Button.propTypes = {
  /** Button label */
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  appearance: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  size: 'normal',
  disabled: false,
  appearance: 'secondary',
  type: 'button',
};

/** @component */
export default Button;
