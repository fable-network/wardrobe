import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const cssBorderBottom = css`
  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${p => p.theme.primaryActive};
  }
`;

const cssSelected = css`
  ${cssBorderBottom};
  color: ${p => p.theme.primaryActive};
`;

const TabBarItem = styled(({ ...otherProps }) => <button {...otherProps} />)`
  display: block;
  position: relative;
  color: ${p => p.theme.grey02};
  background-color: transparent;
  cursor: pointer;
  outline: 0 none;
  border: 0 none;
  overflow: visible;
  border-radius: ${p => p.theme.borderRadius} ${p => p.theme.borderRadius} 0 0;
  transform: translateY(1px);
  [data-whatintent='mouse'] &:hover,
  [data-whatintent='keyboard'] &:focus {
    background-color: ${p => p.theme.grey06};
  }
  &:disabled {
    &,
    &:hover,
    &:focus {
      cursor: not-allowed;
      background-color: transparent;
      &::after {
        display: none;
      }
    }
  }
  ${p => p.selected && cssSelected};
`;

TabBarItem.propTypes = {
  /** Label or other contents of the item */
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
};

/**
 * @component
 * @visibleName TabBar.Item
 */
export default TabBarItem;
