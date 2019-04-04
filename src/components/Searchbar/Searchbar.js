import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import searchIcon from './searchIcon'; // TODO find a way to use Icon component correctly
import LoadingSpinner from '../LoadingSpinner';

const Wrapper = styled('div')`
  position: relative;
  background: #fff;
  color: ${p => p.theme.grey01};
  display: flex;
  align-items: center;
  color: inherit;
`;

const Input = styled('input')`
  width: 100%;
  padding: 8px;
  ${p => `padding-${p.iconPosition}: 40px;`}
  border: solid 1px ${p => p.theme.grey03};
  border-radius: ${p => p.theme.borderRadius};
  outline: none;
  color: inherit;
  &:focus {
    transition: .2s linear;
    border-color: ${p => p.theme.primary};;
    box-shadow: 0 0 3px ${p => p.theme.primary};
  }
  font-size: 100%;
  text-overflow: ellipsis;
`;

const IconWrapper = styled('div')`
  position: absolute;
  ${p => p.iconPosition}: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0;
  line-height: 1;
`;

const renderIcon = (iconPosition, loading, color) => (
  <IconWrapper iconPosition={iconPosition}>
    {loading ? <LoadingSpinner size="20px" /> : searchIcon(color, '21px')}
  </IconWrapper>
);

const Searchbar = ({ iconPosition, theme, loading, ...otherProps }) => (
  <Wrapper>
    {renderIcon(iconPosition, loading, theme.primary)}
    <Input {...otherProps} type="text" iconPosition={iconPosition} />
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
  loading: PropTypes.bool,
};

export default withTheme(Searchbar);
