import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, color, width, height }) => (
  <svg className="ft-icon" fill={color} width={width} height={height}>
    <use xlinkHref={`/iconsprite.svg#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  color: 'inherit',
  width: '1em',
  height: '1em',
};

export default Icon;
