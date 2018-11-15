import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';

const cssPrimary = css`
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};
  border-color: ${p => p.theme.primary};

  &:hover {
    background-color: ${p => p.theme.primaryActive};
    border-color: ${p => p.theme.primaryActive};
  }

  &:disabled,
  &:hover:disabled {
    background-color: ${p => p.theme.grey03};
    border-color: ${p => p.theme.grey03};
  }
`;

const cssSecondary = css`
  color: ${p => p.theme.primary};
  background-color: ${p => p.theme.white};
  border-color: ${p => p.theme.primary};

  &:hover {
    color: ${p => p.theme.primaryActive};
    border-color: ${p => p.theme.primaryActive};
  }

  &:disabled,
  &:hover:disabled {
    background-color: ${p => p.theme.white};
    color: ${p => p.theme.grey03};
    border-color: ${p => p.theme.grey03};
  }
`;

const cssSmall = css`
  font-size: ${p => p.theme.fontSizeSmall};
  line-height: ${p => p.theme.lineHeightControlSmall};
  ${p => paddingHorizontal(`calc(${p.theme.paddingHorizontalSmall} - 1px)`)};
  ${p => paddingVertical(`calc(${p.theme.paddingVerticalSmall} - 1px)`)};
`;

const ButtonInner = ({ size, appearance, children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

ButtonInner.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  appearance: PropTypes.oneOf(['primary', 'secondary']),
};

ButtonInner.defaultProps = {
  size: 'normal',
  appearance: 'secondary',
};

/**
 * An element of a graphical user interface which a user can select to perform a particular action.
 */
const Button = styled(ButtonInner)`
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  line-height: ${p => p.theme.lineHeightControlBase};
  font-size: ${p => p.theme.fontSizeBase};
  ${p => paddingHorizontal(`calc(${p.theme.paddingHorizontalBase} - 1px)`)};
  ${p => paddingVertical(`calc(${p.theme.paddingVerticalBase} - 1px)`)};
  border: solid 1px transparent;
  transition: border-color 150ms linear, background-color 150ms linear, box-shadow 150ms linear;
  cursor: pointer;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: inherit;
  font-weight: normal;

  &:hover {
    box-shadow: ${p => p.theme.shadow};
    transition: border-color 150ms linear, background-color 150ms linear, box-shadow 150ms linear;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:disabled {
    box-shadow: ${p => p.theme.noShadow};
  }

  ${p => p.appearance === 'primary' && cssPrimary};
  ${p => p.appearance === 'secondary' && cssSecondary};
  ${p => p.size === 'small' && cssSmall};
`;

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
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
