import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('div')`
  position: relative;
  background: #FFF;
  color: ${props => props.theme.ravenBlack};
  border: ${props => props.theme.stoneGrey};
`;

const Searchbar = (props) => (
  <Wrapper />
);

Searchbar.defaultProps = {
  placeholder: 'Search',
  onChange: () => null,
  iconPosition: 'right'
};

Searchbar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right'])
};

export default Searchbar;
