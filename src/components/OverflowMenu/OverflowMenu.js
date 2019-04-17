import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import noop from '../../helpers/noop';
import Icon from '../Icon';
import ToggleMenu from '../ToggleMenu';
import DropdownItem from '../DropdownItem';
import DropdownTitle from '../DropdownTitle';

const Trigger = styled.div`
  display: flex;
  padding: calc(0.25rem - 1px);
  text-align: center;
  cursor: pointer;
  transition: border-color 0.1s linear, color 0.1s linear;
  color: ${p => p.color};
  background-color: ${p => p.theme.white};
  border: solid 1px ${p => p.borderColor};
  box-sizing: border-box;
  border-radius: ${p => p.theme.borderRadius};
  ${p => p.active && `box-shadow: 0 0 2px currentColor inset;`};

  &:focus {
    outline: none;
  }

  &:hover,
  [data-whatintent='keyboard'] &:focus {
    outline: none;
    border-color: ${p => p.activeColor};
    color: ${p => p.activeColor};
  }
`;

const Menu = styled.div`
  display: block;
  margin-top: 4px;
  background: ${p => p.theme.white};
  min-width: 100px;
  border: solid 1px ${p => p.theme.grey05};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.borderRadius};
  white-space: nowrap;
`;

class OverflowMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  getWidthAndHeightFromSize = () => {
    const { size } = this.props;
    const sizes = {
      small: {
        width: '1.5rem',
        height: '1.5rem',
      },
      medium: {
        width: '2rem',
        height: '2rem',
      },
      large: {
        width: '2.5rem',
        height: '2.5rem',
      },
    };

    return sizes[size];
  };

  getColorFromAppearance = () => {
    const { appearance, theme } = this.props;
    const colors = {
      primary: theme.primary,
      secondary: theme.grey022,
      success: theme.success,
      warning: theme.warning,
      danger: theme.danger,
      light: theme.grey03,
      dark: theme.grey01,
    };
    return colors[appearance];
  };

  getBorderColorFromAppearance = () => {
    const { appearance, theme } = this.props;
    const colors = {
      primary: theme.primary,
      secondary: theme.grey05,
      success: theme.success,
      warning: theme.warning,
      danger: theme.danger,
      light: theme.grey06,
      dark: theme.grey01,
    };
    return colors[appearance];
  };

  getActiveColor = () => {
    const { appearance, theme } = this.props;
    const colors = {
      primary: theme.primaryActive,
      secondary: theme.primary,
      success: theme.success,
      warning: theme.warning,
      danger: theme.danger,
      light: theme.grey06,
      dark: theme.grey01,
    };
    return colors[appearance];
  };

  isControlled = () => typeof this.props.open !== 'undefined';

  handleMenuOpen = event => {
    this.props.onOpen(event);
    if (!this.isControlled()) {
      this.setState({ menuOpen: true });
    }
  };

  handleMenuClose = event => {
    this.props.onClose(event);
    if (!this.isControlled()) {
      this.setState({ menuOpen: false });
    }
  };

  renderTrigger = ({ toggle }) => {
    const { menuOpen } = this.state;
    const { color: propsColor, activeColor, ...otherProps } = this.props;
    const defaultColor = propsColor || this.getColorFromAppearance();
    const color = menuOpen ? activeColor || this.getActiveColor() : defaultColor;
    const borderColor = propsColor || this.getBorderColorFromAppearance();
    const size = this.getWidthAndHeightFromSize();

    return (
      <Trigger
        tabIndex={0}
        {...otherProps}
        color={color}
        borderColor={borderColor}
        onClick={toggle}
        active={menuOpen}
        activeColor={activeColor || this.getActiveColor()}
        role="button"
      >
        <Icon name="vertical-menu" width={size.width} height={size.height} />
      </Trigger>
    );
  };

  render() {
    const { children, position, open, persist } = this.props;
    const { menuOpen } = this.state;

    return (
      <ToggleMenu
        renderTrigger={this.renderTrigger}
        position={position}
        onOpen={this.handleMenuOpen}
        onClose={this.handleMenuClose}
        persist={persist}
        open={this.isControlled() ? open : menuOpen}
      >
        <Menu>{children}</Menu>
      </ToggleMenu>
    );
  }
}

OverflowMenu.defaultProps = {
  appearance: 'secondary',
  position: 'right',
  onOpen: noop,
  onClose: noop,
  persist: false,
  size: 'small',
};

OverflowMenu.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark',
  ]),
  /** Static color of the icon (Overrides appearance) */
  color: PropTypes.string,
  /** Active color of the icon (Overrides appearance) */
  activeColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
  /** Makes dropdown panel stay after a click inside of it. */
  persist: PropTypes.bool,
  open: PropTypes.bool,
  theme: PropTypes.object,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

OverflowMenu.Item = DropdownItem;
OverflowMenu.Title = DropdownTitle;

export default withTheme(OverflowMenu);
