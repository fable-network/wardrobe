import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Badge.scss';

const Badge = ({ appearance, children, pulsating, theme }) => {
  const classes = classNames({
    'ft--badge': true,
    [`ft--badge--${appearance}`]: true,
    'ft--badge--pulsating': pulsating
  });

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark'
  ]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pulsating: PropTypes.bool
};

export default Badge;
