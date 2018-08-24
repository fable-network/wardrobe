import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import Icon from '../Icon';
import ToggleMenu from '../ToggleMenu';
import DropdownItem from '../DropdownItem';
import DropdownTitle from '../DropdownTitle';

const Trigger = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: .2s linear;
  border: solid 1px ${props => (props.active ? props.color : 'transparent')};
`;

const Menu = styled.div`
  display: block;
  margin-top: 4px;
  background: ${props => props.theme.white};
  min-width: 100px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  white-space: nowrap;
`;

class OverflowMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: props.openByDefault
    };
  }

  getColorFromAppearance = () => {
    const { appearance, theme } = this.props;
    const colors = {
      primary: theme.skyBlue,
      secondary: theme.stoneGrey,
      success: theme.limeGreen,
      warning: theme.apricotOrange,
      light: theme.pearlWhite,
      dark: theme.ravenBlack
    };
    return colors[appearance];
  }

  handleMenuOpen = () => {
    this.props.onOpen();
    this.setState({ menuOpen: true });
  }

  handleMenuClose = () => {
    this.props.onClose();
    this.setState({ menuOpen: false });
  }

  renderTrigger = () => {
    const { menuOpen } = this.state;
    const defaultColor = this.props.color || this.getColorFromAppearance();
    const color = (menuOpen && this.props.activeColor) || defaultColor;

    return (
      <Trigger color={color} active={menuOpen}>
        <Icon
          name="vertical-menu"
          width="5" // TODO make the size dynamic based on size prop
          height="21"
          color={color}
        />
      </Trigger>
    );
  }

  render() {
    const { children, position, openByDefault } = this.props;

    return (
      <ToggleMenu
        trigger={this.renderTrigger()}
        position={position}
        onOpen={this.handleMenuOpen}
        onClose={this.handleMenuClose}
        openByDefault={openByDefault}
      >
        <Menu>
          {children}
        </Menu>
      </ToggleMenu>
    );
  }
}

OverflowMenu.defaultProps = {
  appearance: 'dark',
  position: 'right',
  openByDefault: false,
  onOpen: () => {},
  onClose: () => null
};

OverflowMenu.propTypes = {
  appearance: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark'
  ]),
  /** Static color of the icon (Overrides appearance) */
  color: PropTypes.string,
  /** Active color of the icon (Overrides appearance) */
  activeColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
  openByDefault: PropTypes.bool,
  theme: PropTypes.object,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

OverflowMenu.Item = DropdownItem;
OverflowMenu.Title = DropdownTitle;

export default withTheme(OverflowMenu);
