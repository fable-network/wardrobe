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
  font-size: ${p => p.theme.fontSizeSmall};
  line-height: ${24 / 14}em;
  height: ${24 / 14}em;
  padding: 0 0.5em;
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
  padding: 0 1em;
  line-height: 2em;
  height: 2em;
  border: solid 1px transparent;
  transition: border-color 150ms linear, background-color 150ms linear, box-shadow 150ms linear;
  cursor: pointer;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: inherit;
  font-weight: normal;
  font-size: ${p => p.theme.fontSizeBase};

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(49, 50, 51, 0.2);
    transition: border-color 150ms linear, background-color 150ms linear, box-shadow 150ms linear;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:disabled {
    box-shadow: none;
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
