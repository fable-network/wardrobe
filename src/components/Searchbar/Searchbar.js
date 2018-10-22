import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import searchIcon from './searchIcon'; // TODO find a way to use Icon component correctly
import LoadingSpinner from '../LoadingSpinner';

const Wrapper = styled('div')`
  position: relative;
  background: #FFF;
  color: ${props => props.theme.darkest};
  display: flex;
  align-items: center;
  color: inherit;
`;

const Input = styled('input')`
  width: 100%;
  padding: 10px;
  ${props => `padding-${props.iconPosition}: 40px;`}
  border: solid 1px ${props => props.theme.dark};
  outline: none;
  color: inherit;
  &:focus {
    transition: .2s linear;
    border-color: ${props => props.theme.primary};;
    box-shadow: 0 0 3px ${props => props.theme.primary};
  }
  font-size: 100%;
  text-overflow: ellipsis;
`;

const IconWrapper = styled('div')`
  position: absolute;
  ${props => props.iconPosition}: 10px;
  font-size: 0;
  line-height: 1;
`;

const renderIcon = (iconPosition, loading, color) => (
  <IconWrapper iconPosition={iconPosition}>
    {loading
      ? <LoadingSpinner size="20px" />
      : searchIcon(color, '21px')
    }
  </IconWrapper>
);

const Searchbar = ({ iconPosition, theme, loading, ...otherProps }) => (
  <Wrapper>
    {renderIcon(iconPosition, loading, theme.primary)}
    <Input
      {...otherProps}
      type="text"
      iconPosition={iconPosition}
    />
  </Wrapper>
);

Searchbar.defaultProps = {
  placeholder: 'Search',
  onChange: () => null,
  iconPosition: 'right',
  loading: false,
};

Searchbar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  theme: PropTypes.object,
  value: PropTypes.string,
  loading: PropTypes.bool
};

export default withTheme(Searchbar);
