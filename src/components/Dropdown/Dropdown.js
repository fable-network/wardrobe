import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  display: inline-block;
  background-color: #ffffff;
  border: solid 1px #9b9b9b;
  font-family: inherit;
  font-size: 16px;
  line-height: 1;
  color: #313233;
  padding: 8px 10px;
`;

const ToggleIcon = styled(Icon)`
  margin-left: ${props => props.isSelected ? 11 : 6}px;
  transform: rotateX(${props => props.open && props.animate ? '-180deg' : '0deg'});
  transition: transform 150ms ease-in-out;
`;

const DropdownPanel = styled.div`
  position: absolute;
  display: ${props => props.open ? 'block' : 'none'};
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
    const { label, className, isSelected, children } = this.props;
    const { showMenu } = this.state;

    const icon = isSelected ? 'caret-selected' : 'caret-down';
    const iconColor = isSelected ? '#89ac52' : '#313233';

    return (
      <Wrapper className={className}>
        <DropdownButton onClick={this.showMenu}>
          {label}
          <ToggleIcon
            open={showMenu}
            animate={!isSelected}
            isSelected={isSelected}
            name={icon}
            color={iconColor}
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
  /** Show checkmark instead of dropdown caret */
  isSelected: PropTypes.bool,
  /** Contents of the dropdown */
  children: PropTypes.any,
};

Dropdown.defaultProps = {
  size: 'normal',
  disabled: false,
  appearance: 'secondary',
  type: 'button',
  isSelected: false,
};
export default Dropdown;
