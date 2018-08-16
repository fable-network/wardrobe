import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DropdownItem from '../DropdownItem';
import Icon from '../Icon';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  line-height: 1;
`;

const DropdownButton = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.white};
  border: solid 1px ${props => (
    props.disabled ? props.theme.stoneGrey : props.theme.ravenBlack
  )};
  font-family: inherit;
  font-size: inherit;
  color: ${props => (
    props.disabled ? props.theme.stoneGrey : props.theme.ravenBlack
  )};
  padding: 8px 10px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'inherit')};
`;

const ToggleIcon = styled(Icon).attrs({
  color: props => {
    // Set Icon color attribute
    if (props.disabled) {
      return props.theme.stoneGrey;
    }
    return props.selected ? props.theme.limeGreen : props.theme.ravenBlack;
  },
})`
  margin-left: ${props => (props.selected ? 11 : 6)}px;
  transform: rotateX(${props => (props.open && !props.selected ? '-180deg' : '0deg')});
  transition: transform 150ms ease-in-out;
`;

const DropdownPanel = styled.div`
  position: absolute;
  display: ${(props) => (props.open ? 'block' : 'none')};
  margin-top: 4px;
  background: ${props => props.theme.white};
  border: solid 1px ${props => props.theme.stoneGrey};
  min-width: 100%; // Minimally the width of the dropdown button
  z-index: 11;
  max-height: 75vh;
  box-shadow: 0 2px 10px ${props => props.theme.stoneGrey};
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
