import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme as defaultTheme } from '../../theme';

const Sizes = ['0', 'S', 'M', 'L', 'XL'];

const propTypes = {
  children: PropTypes.node,
  /**
   * Box padding. Will result in `0` if not specified.
   * Is overriden by any of the screen-size-specific values.
   */
  padding: paddingPropTypeChecker,
  /** Box padding on mobile. Overrides `padding` property. */
  paddingMobile: paddingPropTypeChecker,
  /** Box padding on tablet. Overrides `padding` property. */
  paddingTablet: paddingPropTypeChecker,
  /** Box padding on desktop. Overrides `padding` property. */
  paddingDesktop: paddingPropTypeChecker,
  /** Box padding on widescreen. Overrides `padding` property. */
  paddingWide: paddingPropTypeChecker,
  /**
   * Spacing between children. Will result in `0` if not specified.
   * Is overriden by any of the screen-size-specific values.
   */
  stack: PropTypes.oneOf(Sizes),
  /** Spacing between children on mobile. Overrides `stack` property. */
  stackMobile: PropTypes.oneOf(Sizes),
  /** Spacing between children on tablet. Overrides `stack` property. */
  stackTablet: PropTypes.oneOf(Sizes),
  /** Spacing between children on desktop. Overrides `stack` property. */
  stackDesktop: PropTypes.oneOf(Sizes),
  /** Spacing between children on widescreen. Overrides `stack` property. */
  stackWide: PropTypes.oneOf(Sizes),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  renderAs: PropTypes.string,
};

const getSizeRule = (propName, theme = defaultTheme, value) =>
  `${propName}: ${theme[`space${value}`] || 0};`;

const getPadding = (theme = defaultTheme, value) => {
  const [vertical, horizontal] = value.split(' ');
  return `
    ${getSizeRule('padding-top', theme, vertical)};
    ${getSizeRule('padding-bottom', theme, vertical)};
    ${getSizeRule('padding-left', theme, horizontal || vertical)};
    ${getSizeRule('padding-right', theme, horizontal || vertical)};
  `;
};

const getStackMediaCss = (media, value) => css`
  ${p => (p.theme[media] || defaultTheme[media])`
    ${getSizeRule(p.direction === 'horizontal' ? 'margin-left' : 'margin-top', p.theme, value)};
  `};
`;

const stackCss = css`
  flex-flow: ${p => (p.direction === 'horizontal' ? 'row nowrap' : 'column nowrap')};
  > * + * {
    ${p =>
      getSizeRule(p.direction === 'horizontal' ? 'margin-left' : 'margin-top', p.theme, p.stack)};
    ${p => p.stackMobile && getStackMediaCss('mobile', p.stackMobile)};
    ${p => p.stackTablet && getStackMediaCss('tablet', p.stackTablet)};
    ${p => p.stackDesktop && getStackMediaCss('desktop', p.stackDesktop)};
    ${p => p.stackWide && getStackMediaCss('wide', p.stackWide)};
  }
`;

const getPaddingMediaCss = (media, value) => css`
  ${p => (p.theme[media] || defaultTheme[media])`
    ${getPadding(p.theme, value)};
  `};
`;

const paddingCss = css`
  ${p => getPadding(p.theme, p.padding)};
  ${p => p.paddingMobile && getPaddingMediaCss('mobile', p.paddingMobile)};
  ${p => p.paddingTablet && getPaddingMediaCss('tablet', p.paddingTablet)};
  ${p => p.paddingDesktop && getPaddingMediaCss('desktop', p.paddingDesktop)};
  ${p => p.paddingWide && getPaddingMediaCss('wide', p.paddingWide)};
`;

const BoxInner = ({
  renderAs,
  padding,
  paddingMobile,
  paddingTablet,
  paddingDesktop,
  paddingWide,
  stack,
  stackMobile,
  stackTablet,
  stackDesktop,
  stackWide,
  direction,
  children,
  ...otherProps
}) => React.createElement(renderAs, otherProps, children);

BoxInner.propTypes = propTypes;

const Box = styled(BoxInner)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  ${stackCss};
  ${paddingCss};
`;

Box.propTypes = propTypes;

Box.defaultProps = {
  renderAs: 'div',
  direction: 'vertical',
  padding: '0',
  stack: '0',
};

/**
 * @component
 */
export default Box;

/**
 * Checks for available padding prop type values: single (e.g. "M")
 * or double (e.g. "M L", where the first one is vertical, and the second
 * is horizontal).
 */
function paddingPropTypeChecker(props, propName, componentName) {
  if (!(propName in props)) return undefined;
  if (typeof props[propName] === 'string') {
    const value = props[propName].split(' ');
    if (value.length && value.length <= 2 && value.every(isValidSize)) {
      return undefined;
    }
  }
  return new Error(
    `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
  );
}

function isValidSize(value) {
  return Boolean(Sizes.find(s => s === value));
}
