import React from 'react';
import PropTypes from 'prop-types';
import '../../static/iconsprite.svg';

console.log(window.ICONS_LIST);
/**
 * Uses a SVG sprite to show icons based on name
 */
const Icon = ({ name, color, fill, stroke, width, height, strokeWidth, ...otherProps }) => (
  <svg
    className="ft-icon"
    width={width}
    height={height}
    fill={fill || color}
    stroke={stroke}
    strokeWidth={strokeWidth}
    {...otherProps}
  >
    <use xlinkHref={`/iconsprite.svg#icon-${name}`} />
  </svg>
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
  /** Change width; SVG ratio will be preserved */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Change height; SVG ratio will be preserved */
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
