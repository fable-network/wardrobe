import React from 'react';
import PropTypes from 'prop-types';
import '../../static/iconsprite.svg';

/**
 * Uses a SVG sprite to show icons based on name
 */
const Icon = ({ name, color, width, height, ...otherProps }) => (
  <svg
    className="ft-icon"
    width={width}
    height={height}
    fill={color}
    {...otherProps}
  >
    <use xlinkHref={`/iconsprite.svg#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  /** Name of the icon as defined in the sprite */
  name: PropTypes.string.isRequired,
  /** Color for the SVG `fill`  attributes */
  color: PropTypes.string,
  /** Change width; SVG ratio will be preserved */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Change height; SVG ratio will be preserved */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Icon.defaultProps = {
  color: 'inherit',
  width: '1em',
  height: '1em',
};

export default Icon;
