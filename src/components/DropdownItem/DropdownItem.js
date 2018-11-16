import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  color: ${p => p.theme.grey01};
  cursor: pointer;

  &:hover {
    background: ${p => p.theme.grey05};
  }
`;

/**
 * Single item in the dropdown panel. This adds the necessary padding for simple text labels.
 *
 * @visibleName Dropdown.Item
 */
const DropdownItem = ({ children, onClick, ...otherProps }) => (
  <Wrapper {...otherProps} onClick={onClick}>
    {children}
  </Wrapper>
);

DropdownItem.propTypes = {
  /** Label or other contents of the item */
  children: PropTypes.node,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  onClick: () => null,
};

export default DropdownItem;
