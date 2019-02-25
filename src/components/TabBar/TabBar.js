import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import TabBarItem from '../TabBarItem/TabBarItem';

function getMinHeight({ size, theme }) {
  switch (size) {
    case 'small':
      return `calc(${theme.paddingVerticalSmall} * 2 + ${theme.lineHeightControlSmall}em)`;
    case 'large':
      return `calc(${theme.paddingVerticalLarge} * 2 + ${theme.lineHeightControlLarge}em)`;
    case 'normal':
    default:
      return `calc(${theme.paddingVerticalBase} * 2 + ${theme.lineHeightControlBase}em)`;
  }
}

function getTabPadding({ size, theme }) {
  switch (size) {
    case 'small':
      return css`
        padding: ${theme.paddingVerticalSmall} ${theme.paddingHorizontalSmall};
        ${theme.tablet_up`
          padding-left: calc(${theme.paddingHorizontalSmall} * 3);
          padding-right: calc(${theme.paddingHorizontalSmall} * 3);
        `};
      `;
    case 'large':
      return css`
        padding: ${theme.paddingVerticalLarge} ${theme.paddingHorizontalSmall};
        ${theme.tablet_up`
          padding-left: calc(${theme.paddingHorizontalLarge} * 3);
          padding-right: calc(${theme.paddingHorizontalLarge} * 3);
        `};
      `;
    case 'normal':
    default:
      return css`
        padding: ${theme.paddingVerticalBase} ${theme.paddingHorizontalSmall};
        ${theme.tablet_up`
          padding-left: calc(${theme.paddingHorizontalBase} * 3);
          padding-right: calc(${theme.paddingHorizontalBase} * 3);
        `};
      `;
  }
}

function getTabLineHeight({ size, theme }) {
  switch (size) {
    case 'small':
      return theme.lineHeightControlSmall;
    case 'large':
      return theme.lineHeightControlLarge;
    case 'normal':
    default:
      return theme.lineHeightControlBase;
  }
}

function getTabFontSize({ size, theme }) {
  switch (size) {
    case 'small':
      return theme.fontSizeSmall;
    case 'large':
      return theme.fontSizeLarge;
    case 'normal':
    default:
      return theme.fontSizeBase;
  }
}

function getFlexAlignment({ align }) {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
    default:
      return 'center';
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${getFlexAlignment};
  align-items: center;
  border-bottom: solid 1px ${p => p.theme.grey05};
  margin: 0;
  padding: 0;
  min-height: ${getMinHeight};

  ${TabBarItem} {
    font-size: ${getTabFontSize};
    line-height: ${getTabLineHeight};
    ${getTabPadding};
  }
`;

class TabBar extends React.Component {
  state = { value: this.props.defaultValue };

  handleSelect = value => {
    const { onSelect } = this.props;
    if (typeof onSelect === 'function') onSelect(value);
    this.setState({ value });
  };

  renderChildren = () => {
    const { children } = this.props;
    const { value } = this.state;
    return React.Children.map(children, (child, index) => {
      if (!child) return null;
      const { value: childValue = index } = child.props;
      return React.cloneElement(child, {
        ...child.props,
        selected: childValue === value,
        onClick: e => {
          this.handleSelect(childValue);
          if (typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }
        },
      });
    });
  };

  render() {
    const { size, align, ...otherProps } = this.props;
    return (
      <Wrapper size={size} align={align} {...otherProps}>
        {this.renderChildren()}
      </Wrapper>
    );
  }
}

TabBar.defaultProps = {
  size: 'normal',
  align: 'center',
};

TabBar.propTypes = {
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  onSelect: PropTypes.func,
};

TabBar.Item = TabBarItem;

/**
 * @component TabBar
 */
export default TabBar;
