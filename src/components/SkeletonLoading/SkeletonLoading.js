import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { theme } from '../../theme';
import { skeleton, fadeIn } from '../../animations';

const defaultCss = css`
  display: block;
  min-height: 1px;
  width: ${(p) => p.width || '100%'};
  background: ${p => p.baseColor || p.theme.grey05};
  position: relative;
  &:before {
    content: '';
    ${(p) => (p.animating && `animation: ${skeleton(p.color)} 2.5s ease-in-out infinite;`)}
  }
`;

const textCss = css`
  height: 16px;
`;

const squareCss = css`
  padding-top: ${(p) => p.width || '100%'};
`;

const headerCss = css`
  height: 24px;
`;

const circleCss = css`
  ${squareCss};
  border-radius: 50%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  ${defaultCss};
  ${(p) => p.height && `height: ${p.height};`}
  ${(p) => p.shape === 'text' && textCss};
  ${(p) => p.shape === 'square' && squareCss};
  ${(p) => p.shape === 'header' && headerCss};
  ${(p) => p.shape === 'circle' && circleCss};
  animation: ${fadeIn} 500ms ease;
`;

const SkeletonLoading = ({ width, animating, shape, color, height, baseColor }) => (
  <Wrapper
    width={width}
    animating={animating}
    shape={shape}
    color={color}
    height={height}
    baseColor={baseColor}
  />
);

SkeletonLoading.propTypes = {
  /** Used to set the width of the skeleton block; preferably this should be left at 100% and
  the width set by the parent */
  width: PropTypes.string,
  /** Use the height prop to define custom height that is not provided by one of the shapes */
  height: PropTypes.string,
  animating: PropTypes.bool,
  shape: PropTypes.oneOf(['text', 'square', 'header', 'circle']),
  /** color used for the animation */
  color: PropTypes.string,
  /** color used for the base */
  baseColor: PropTypes.string,
};

SkeletonLoading.defaultProps = {
  width: '100%',
  animating: true,
  baseColor: theme.grey05,
};

export default SkeletonLoading;
