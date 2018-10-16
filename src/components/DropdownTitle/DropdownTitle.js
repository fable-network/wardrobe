import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px 15px;
  font-weight: bold;
`;

const DropdownTitle = ({ children, ...otherProps }) => (
  <Wrapper {...otherProps}>
    {children}
  </Wrapper>
);

DropdownTitle.propTypes = {
  children: PropTypes.node,
};

export default DropdownTitle;
