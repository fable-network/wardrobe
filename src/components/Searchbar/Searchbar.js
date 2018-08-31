import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import searchIcon from './searchIcon'; // TODO find a way to use Icon component correctly

const Wrapper = styled('div')`
  position: relative;
  background: #FFF;
  color: ${props => props.theme.ravenBlack};
  display: flex;
  align-items: center;
  color: inherit;
`;

const Input = styled('input')`
  width: 100%;
  padding: 10px;
  ${props => `padding-${props.iconPosition}: 40px;`}
  border: solid 1px ${props => props.theme.stoneGrey};
  outline: none;
  color: inherit;
  &:focus {
    transition: .2s linear;
    border-color: ${props => props.theme.skyBlue};;
    box-shadow: 0 0 3px ${props => props.theme.skyBlue};
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

const renderIcon = (iconPosition, color) => (
  <IconWrapper iconPosition={iconPosition}>
    {searchIcon(color, '21px')}
  </IconWrapper>
);

const Searchbar = ({ iconPosition, placeholder, theme, onChange, value, ...props }) => (
  <Wrapper>
    {renderIcon(iconPosition, theme.skyBlue)}
    <Input
      type="text"
      placeholder={placeholder}
      iconPosition={iconPosition}
      onChange={onChange}
      value={value}
      {...props}
    />
  </Wrapper>
);

Searchbar.defaultProps = {
  placeholder: 'Search',
  onChange: () => null,
  iconPosition: 'right',
  value: ''
};

Searchbar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  theme: PropTypes.object,
  value: PropTypes.string
};

export default withTheme(Searchbar);
