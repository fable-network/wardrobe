import React from 'react';
import PropTypes from 'prop-types';
import styled  from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 5px 20px;
  background-color: ${props => (props.disabled ? '#cde0ed' : '#5f9dc7')}; // theme
  font-family: 'Avenir Next', sans-serif; // theme
  font-weight: normal;
  color: #fff; // theme
  font-size: ${props => Button.sizes[props.size]};
  // Reset default button styles
  border: 0;

  &:not([disabled]):hover {
    background-color: ${props => props.theme.skyBlue}; // theme
    box-shadow: 0 2px 4px 0 rgba(49, 50, 51, 0.1); // theme?
  }
`;

/**
 * An element of a graphical user interface which a user can select to perform a particular action.
 */
const Button = ({ size, disabled, children }) => (
  <StyledButton size={size} disabled={disabled}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  /**
   * Button label.
   */
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['normal']),
  disabled: PropTypes.bool,
  theme: PropTypes.object.isRequired,
};

Button.defaultProps = {
  size: 'normal',
  disabled: false,
};

Button.sizes = {
  normal: '18px',
};

/** @component */
export default Button;
