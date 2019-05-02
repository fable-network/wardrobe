import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../../static/iconsprite.svg';

const parseSizeValue = value => {
  const numRegex = /^\d+$/;
  if (typeof value === 'number' || numRegex.test(value)) {
    return `${value}px`;
  }
  return value;
};

const Svg = styled(({ width, height, ...otherProps }) => <svg {...otherProps} />)`
  width: ${p => parseSizeValue(p.width)};
  height ${p => parseSizeValue(p.height)};
`;

/**
 * Uses a SVG sprite to show icons based on name
 */
const Icon = ({ name, color, fill, stroke, width, height, strokeWidth, ...otherProps }) => (
  <Svg
    className="ft-icon"
    width={width}
    height={height}
    fill={fill || color}
    stroke={stroke}
    strokeWidth={strokeWidth}
    {...otherProps}
  >
    <use xlinkHref={`/iconsprite.svg#icon-${name}`} />
  </Svg>
);

Icon.propTypes = {
  /** Name of the icon as defined in the sprite */
  name: PropTypes.string.isRequired,

  /**
   * Color for the SVG `fill`  attributes
   * @deprecated
   * */
  color: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  /** Change width; SVG ratio will be preserved. Rendered in CSS. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Change height; SVG ratio will be preserved. Rendered in CSS. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.number,
};

Icon.defaultProps = {
  color: 'inherit',
  width: '1em',
  height: '1em',
  strokeWidth: 1,
};

export default Icon;
