import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DropdownItem from '../DropdownItem';
import Icon from '../Icon';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

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
  position: absolute;
  display: ${(props) => (props.open ? 'block' : 'none')};
  margin-top: 4px;
  background: white;
  border: solid 1px #9b9b9b;
  min-width: 100%; // Minimally the width of the dropdown button
  z-index: 11;
  max-height: 75vh;
  box-shadow: 0 2px 10px #ccc;
  overflow: auto;
  margin-bottom: 1em; // Keep some space at the bottom of the screen
`;

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
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

  showMenu = (event) => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = (event) => {
    if (!this.dropdownPanel.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  };

  render() {
    const { label, className, disabled, isSelected, children } = this.props;
    const { showMenu } = this.state;

    return (
      <Wrapper className={className}>
        <DropdownButton onClick={this.showMenu} disabled={disabled}>
          {label}
          <ToggleIcon
            open={showMenu}
            selected={isSelected}
            name={this.getIcon()}
            color={this.getIconColor()}
            width={isSelected ? 11 : 16}
            height={9}
          />
        </DropdownButton>
        <DropdownPanel
          open={this.state.showMenu}
          innerRef={element => {
            this.dropdownPanel = element;
          }}
        >
          {children}
        </DropdownPanel>
      </Wrapper>
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
};

Dropdown.defaultProps = {
  label: 'Select...',
  className: null,
  disabled: false,
  isSelected: false,
};

Dropdown.Item = DropdownItem;

export default Dropdown;
