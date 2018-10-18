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
  min-width: 240px;
  ${props => props.fluid && 'width: 100%;'};
  background-color: ${props => props.theme.lightest};
  border: solid 1px ${props => (props.disabled ? '#ccc' : props.theme.dark)};
  font-family: inherit;
  font-size: inherit;
  color: ${props => (props.disabled ? '#ccc' : props.theme.darkest)};
  padding: 10px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  user-select: ${props => (props.disabled ? 'none' : 'initial')};
  &:focus {
    outline: none;
    box-shadow: 0 0 4px ${props => props.theme.primary};
    border-color: ${props => props.theme.primary};
  }
`;

const Label = styled('span')`
  display: inline-block;
  flex-grow: 1;
  line-height: 1;
  text-align: left;
`;

const StyledIcon = styled(Icon).attrs({
  color: props => {
    // Set Icon color attribute
    if (props.disabled) {
      return '#ccc';
    }
    return props.selected ? props.theme.limeGreen : props.theme.darkest;
  },
})`
  transform: rotateX(${props => (props.open && !props.selected ? '-180deg' : '0deg')});
  transition: transform 150ms ease-in-out;
`;

const DropdownPanel = styled.div`
  background: ${props => props.theme.lightest};
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
    const { selected } = this.props;

    return selected ? 'caret-selected' : 'caret-down';
  };

  isControlled = () => typeof this.props.open !== 'undefined';

  handleMenuOpen = () => {
    if (!this.isControlled()) {
      this.setState({ menuOpen: true });
    }
  };

  handleMenuClose = () => {
    this.props.onClose();
    if (!this.isControlled()) {
      this.setState({ menuOpen: false });
    }
  };

  renderTrigger = () => {
    const {
      disabled,
      label,
      selected,
      isLoading,
      onClick,
      open,
      fluid,
    } = this.props;
    const { menuOpen } = this.state;

    return (
      <DropdownButton disabled={disabled} onClick={onClick} fluid={fluid}>
        <Label>{label}</Label>
        <IconWrapper>
          {isLoading ? (
            <LoadingSpinner size="17px" />
          ) : (
            <StyledIcon
              open={this.isControlled() ? open : menuOpen}
              selected={selected}
              name={this.getIcon()}
              width={selected ? 11 : 16}
              height={9}
              disabled={disabled}
            />
          )}
        </IconWrapper>
      </DropdownButton>
    );
  };

  render() {
    const {
      children,
      className,
      position,
      preventOutOfBounds,
      disabled,
      open,
      fluid,
    } = this.props;

    return (
      <ToggleMenu
        trigger={this.renderTrigger()}
        className={className}
        onOpen={this.handleMenuOpen}
        onClose={this.handleMenuClose}
        position={position}
        preventOutOfBounds={preventOutOfBounds}
        disabled={disabled}
        fluid={fluid}
        open={open}
      >
        <DropdownPanel>{children}</DropdownPanel>
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
  selected: PropTypes.bool,
  isLoading: PropTypes.bool,
  /** Contents of the dropdown */
  children: PropTypes.node.isRequired,
  /** Position of the dropdown panel */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  onClose: PropTypes.func,
  /** Flag to flip the menu position if out of viewport */
  preventOutOfBounds: PropTypes.bool,
  /** Makes the toggle button fluid (100% width) */
  fluid: PropTypes.bool,
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {
  label: 'Select',
  className: null,
  disabled: false,
  selected: false,
  isLoading: false,
  fluid: false,
  onClose: () => null,
};

Dropdown.Item = DropdownItem;

export default Dropdown;
