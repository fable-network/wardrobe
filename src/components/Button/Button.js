import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

/**
 * An element of a graphical user interface which a user can select to perform a particular action.
 */
const Button = ({ size, className, disabled, type, appearance, children, ...other }) => {
  const buttonClasses = classNames(className, {
    'ft--btn': true,
    'ft--btn--sm': size === 'small',
    'ft--btn--primary': appearance === 'primary',
    'ft--btn--secondary': appearance === 'secondary',
  });

  return (
    <button
      {...other}
      className={buttonClasses}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button label.
   */
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
