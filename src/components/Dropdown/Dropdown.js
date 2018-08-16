import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToggleMenu from '../ToggleMenu';
import DropdownItem from '../DropdownItem';
import Icon from '../Icon';

const DropdownButton = styled.button`
  display: inline-block;
  background-color: #ffffff;
  border: solid 1px ${props => (props.disabled ? '#cdcdcd' : '#313233')};
  font-family: inherit;
  font-size: 16px;
  line-height: 1;
  color: ${props => (props.disabled ? '#cdcdcd' : '#313233')};
  padding: 8px 10px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'inherit')};
`;

const ToggleIcon = styled(Icon)`
  margin-left: ${props => (props.selected ? 11 : 6)}px;
  transform: rotateX(${props => (props.open && !props.selected ? '-180deg' : '0deg')});
  transition: transform 150ms ease-in-out;
`;

const DropdownPanel = styled.div`
  background: white;
  border: solid 1px #9b9b9b;
  min-width: 100%; // Minimally the width of the dropdown button
  z-index: 11;
  max-height: 75vh;
  box-shadow: 0 2px 10px #ccc;
  overflow: auto;
`;

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
    };
  }

  getIcon = () => {
    const { isSelected } = this.props;

    return isSelected ? 'caret-selected' : 'caret-down';
  };

  getIconColor = () => {
    const { disabled, isSelected } = this.props;

    if (disabled) {
      return '#cdcdcd';
    }

    return isSelected ? '#89ac52' : '#313233';
  };

  handleMenuOpen = () => {
    this.setState({ menuOpen: true });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  renderTrigger = () => {
    const { disabled, label, isSelected } = this.props;
    const { menuOpen } = this.state;

    return (
      <DropdownButton disabled={disabled}>
        {label}
        <ToggleIcon
          open={menuOpen}
          selected={isSelected}
          name={this.getIcon()}
          color={this.getIconColor()}
          width={isSelected ? 11 : 16}
          height={9}
        />
      </DropdownButton>
    );
  }

  render() {
    const { children, className, position } = this.props;

    return (
      <ToggleMenu
        trigger={this.renderTrigger()}
        className={className}
        onOpen={this.handleMenuOpen}
        onClose={this.handleMenuClose}
        position={position}
      >
        <DropdownPanel>
          {children}
        </DropdownPanel>
      </ToggleMenu>
    );
  }
}

Dropdown.propTypes = {
  /** button label */
  label: PropTypes.string,
  /** Custom class name */
  className: PropTypes.string,
  /** Disable dropdown */
  disabled: PropTypes.bool,
  /** Show checkmark instead of dropdown caret */
  isSelected: PropTypes.bool,
  /** Contents of the dropdown */
  children: PropTypes.node.isRequired,
  /** Position of the dropdown panel */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

Dropdown.defaultProps = {
  label: 'Select...',
  className: null,
  disabled: false,
  isSelected: false,
};

Dropdown.Item = DropdownItem;

export default Dropdown;
