import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToggleMenu from '../ToggleMenu';
import DropdownItem from '../DropdownItem';
import Icon from '../Icon';
import LoadingSpinner from '../LoadingSpinner';

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.white};
  border: solid 1px ${props => (
    props.disabled ? '#ccc' : props.theme.stoneGrey
  )};
  font-family: inherit;
  font-size: inherit;
  color: ${props => (
    props.disabled ? '#ccc' : props.theme.ravenBlack
  )};
  padding: 10px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &:focus {
    outline: none;
    box-shadow: 0 0 4px ${props => props.theme.skyBlue};
    border-color: ${props => props.theme.skyBlue}
  }
`;

const Label = styled('span')`
  display: inline-block;
  flex-grow: 1;
  line-height: 1;
`;

const StyledIcon = styled(Icon).attrs({
  color: props => {
    // Set Icon color attribute
    if (props.disabled) {
      return '#ccc';
    }
    return props.selected ? props.theme.limeGreen : props.theme.ravenBlack;
  },
})`
  transform: rotateX(${props => (props.open && !props.selected ? '-180deg' : '0deg')});
  transition: transform 150ms ease-in-out;
`;

const DropdownPanel = styled.div`
  background: ${props => props.theme.white};
  min-width: 100%; // Minimally the width of the dropdown button
  max-height: 75vh;
  box-shadow: 0 1px 4px #ccc;
  overflow: auto;
`;

const IconWrapper = styled.div`
  width: 22px;
  text-align: right;
  font-size: 0;
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

  handleMenuOpen = () => {
    this.setState({ menuOpen: true });
  };

  handleMenuClose = () => {
    this.props.onClose();
    this.setState({ menuOpen: false });
  };

  renderTrigger = () => {
    const { disabled, label, isSelected, isLoading } = this.props;
    const { menuOpen } = this.state;

    return (
      <DropdownButton disabled={disabled}>
        <Label>{label}</Label>
        <IconWrapper>
          {isLoading
            ? <LoadingSpinner size="17px" />
            : (
              <StyledIcon
                open={menuOpen}
                selected={isSelected}
                name={this.getIcon()}
                width={isSelected ? 11 : 16}
                height={9}
                disabled={disabled}
              />
            )
          }
        </IconWrapper>
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
  isLoading: PropTypes.bool,
  /** Contents of the dropdown */
  children: PropTypes.node.isRequired,
  /** Position of the dropdown panel */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  onClose: PropTypes.func
};

Dropdown.defaultProps = {
  label: 'Select...',
  className: null,
  disabled: false,
  isSelected: false,
  isLoading: false,
  onClose: () => null
};

Dropdown.Item = DropdownItem;

export default Dropdown;
