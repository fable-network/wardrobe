import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

/**
 * An element of a graphical user interface which a user can select to perform a particular action.
 */
const Button = ({ size, disabled, type, children }) => {
  const buttonClasses = classNames({
    'ft--btn': true,
    'ft--btn--sm': size === 'small',
    'ft--btn--primary': type === 'primary',
    'ft--btn--secondary': type === 'secondary',
  });

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
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
  size: PropTypes.oneOf(['small, normal']),
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary'])
};

Button.defaultProps = {
  size: 'normal',
  disabled: false,
  type: 'secondary',
};

Button.sizes = {
  normal: '18px',
};

/** @component */
export default Button;
