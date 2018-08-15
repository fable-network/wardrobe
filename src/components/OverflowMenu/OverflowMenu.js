import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('div')``;

const OverflowMenu = (props) => (
  <Wrapper {...props} />
);

OverflowMenu.defaultProps = {};

OverflowMenu.propTypes = {
  color: PropTypes.string
};

export default OverflowMenu;
