import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';
import ToggleMenu from '../ToggleMenu';
import DropdownItem from '../DropdownItem';

const Trigger = styled.span`
  display: inline-block;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border: solid 1px ${props => (props.active ? '#cdcdcd' : 'transparent')};
`;

class OverflowMenu extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
  }

  renderTrigger = () => {
    const { color } = this.props;
    const { menuOpen } = this.state;

    return (
      <Trigger active={menuOpen}>
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
    const { color, children } = this.props;
    return (
      <ToggleMenu
        trigger={this.renderTrigger(color)}
      >
        {children}
      </ToggleMenu>
    );
  }
}

OverflowMenu.defaultProps = {
  color: '#313233'
};

OverflowMenu.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node
};

OverflowMenu.Item = DropdownItem;

export default OverflowMenu;
