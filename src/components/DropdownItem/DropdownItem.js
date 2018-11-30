import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Single item in the dropdown panel. This adds the necessary padding for simple text labels.
 *
 * @visibleName Dropdown.Item
 */
const DropdownItem = ({ children, onClick, ...otherProps }) => (
  <div {...otherProps} onClick={onClick} tabIndex="0" role="button">
    {children}
  </div>
);

DropdownItem.propTypes = {
  /** Label or other contents of the item */
  children: PropTypes.node,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  onClick: () => null,
};

export default styled(DropdownItem)`
  padding: 0.5rem 1rem;
  color: ${p => p.theme.grey01};
  cursor: pointer;
  outline: 0px none;
`;
