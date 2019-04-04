import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';

const cssPrimary = css`
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.primary};
  border-color: ${p => p.theme.primary};
  border-radius: ${p => p.theme.borderRadius};

  &:hover,
  [data-whatintent='keyboard'] &:focus {
    background-color: ${p => p.theme.primaryActive};
    border-color: ${p => p.theme.primaryActive};
  }

  &:disabled,
  &:hover:disabled,
  [data-whatintent='keyboard'] &:focus:disabled {
    background-color: ${p => p.theme.grey03};
    border-color: ${p => p.theme.grey03};
  }
`;

const cssSecondary = css`
  color: ${p => p.theme.primary};
  background-color: ${p => p.theme.white};
  border-color: ${p => p.theme.primary};
  border-radius: ${p => p.theme.borderRadius};

  &:hover,
  [data-whatintent='keyboard'] &:focus {
    color: ${p => p.theme.primaryActive};
    border-color: ${p => p.theme.primaryActive};
  }

  &:disabled,
  &:hover:disabled,
  [data-whatintent='keyboard'] &:focus:disabled {
    background-color: ${p => p.theme.white};
    color: ${p => p.theme.grey03};
    border-color: ${p => p.theme.grey03};
  }
`;

const cssLink = css`
  background-color: transparent;
  &,
  &:link,
  &:visited {
    text-decoration: none;
    color: ${p => p.theme.primary};
    box-shadow: ${p => p.theme.noShadow};
  }

  [data-whatintent='keyboard'] &:focus {
    background-color: ${p => p.theme.grey04};
    text-decoration: underline;
  }

  &:active,
  &:hover {
    box-shadow: ${p => p.theme.noShadow};
    text-decoration: underline;
    color: ${p => p.theme.primaryActive};
  }

  &:disabled {
    &,
    &:link,
    &:active,
    &:hover,
    &:visited,
    [data-whatintent='keyboard'] &:focus {
      cursor: not-allowed;
      background: none;
      text-decoration: none;
      color: ${p => p.theme.grey04};
    }
  }
`;

const cssSmall = css`
  font-size: ${p => p.theme.fontSizeSmall};
  line-height: ${p => p.theme.lineHeightControlSmall};
  ${p => paddingHorizontal(`calc(${p.theme.paddingHorizontalSmall} - 1px)`)};
  ${p => paddingVertical(`calc(${p.theme.paddingVerticalSmall} - 1px)`)};
`;

const ButtonInner = ({ size, appearance, renderAs, children, ...otherProps }) =>
  React.createElement(renderAs, otherProps, children);

ButtonInner.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'normal']),
  appearance: PropTypes.oneOf(['primary', 'secondary', 'link']),
  renderAs: PropTypes.string,
};

ButtonInner.defaultProps = {
  size: 'normal',
  appearance: 'secondary',
  renderAs: 'button',
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
  ${p => p.appearance === 'link' && cssLink};
  ${p => p.size === 'small' && cssSmall};
`;

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  appearance: PropTypes.oneOf(['primary', 'secondary', 'link']),
  /** Render to DOM as a given tag. Should be a valid HTML tag. */
  renderAs: PropTypes.string,
};

Button.defaultProps = {
  size: 'normal',
  disabled: false,
  appearance: 'secondary',
  renderAs: 'button',
};

/** @component */
export default Button;
