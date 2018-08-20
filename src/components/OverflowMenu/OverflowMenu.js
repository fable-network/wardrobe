import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fashiontradeTheme from '../../theme/default';

import Icon from '../Icon';
import ToggleMenu from '../ToggleMenu';
import DropdownItem from '../DropdownItem';

const Trigger = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border: solid 1px ${props => (props.active ? props.activeColor : 'transparent')};
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
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
  }

  handleMenuOpen = () => {
    this.setState({ menuOpen: true });
  }

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  }

  renderTrigger = () => {
    const { color, activeColor } = this.props;
    const { menuOpen } = this.state;

    return (
      <Trigger active={menuOpen} activeColor={activeColor}>
        <Icon
          name="vertical-menu"
          width="5" // TODO make the size dynamic based on size prop
          height="21"
          color={menuOpen ? activeColor : color}
        />
      </Trigger>
    );
  }

  render() {
    const { children, position } = this.props;

    return (
      <ToggleMenu
        trigger={this.renderTrigger()}
        position={position}
        onOpen={this.handleMenuOpen}
        onClose={this.handleMenuClose}
      >
        <Menu>
          {children}
        </Menu>
      </ToggleMenu>
    );
  }
}

OverflowMenu.defaultProps = {
  color: fashiontradeTheme.ravenBlack,
  activeColor: fashiontradeTheme.skyBlue,
  position: 'right'
};

OverflowMenu.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  position: PropTypes.string,
  activeColor: PropTypes.string
};

OverflowMenu.Item = DropdownItem;

export default OverflowMenu;
