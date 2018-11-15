import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';

import ToggleMenu from '../ToggleMenu';
import DropdownItem from '../DropdownItem';
import Icon from '../Icon';
import LoadingSpinner from '../LoadingSpinner';

const DropdownButton = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-width: 240px;
  max-width: 100%;
  ${props => props.fluid && 'width: 100%;'};
  background-color: ${props => props.theme.white};
  border: solid 1px ${props => (props.disabled ? props.theme.grey04 : props.theme.grey03)};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizeBase};
  ${p => paddingHorizontal(`calc(${p.theme.paddingHorizontalBase} - 1px)`)};
  ${p => paddingVertical(`calc(${p.theme.paddingVerticalBase} - 1px)`)};
  color: ${props => (props.disabled ? props.theme.grey04 : props.theme.grey01)};
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
  line-height: ${p => p.theme.lineHeightControlBase};
  text-align: left;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledIcon = styled(Icon).attrs({
  color: props => {
    // Set Icon color attribute
    if (props.disabled) {
      return props.theme.grey04;
    }
    return props.selected ? props.theme.success : props.theme.grey01;
  },
})`
  transform: rotateX(${props => (props.open && !props.selected ? '-180deg' : '0deg')});
  transition: transform 150ms ease-in-out;
`;

const DropdownPanel = styled.div`
  background: ${props => props.theme.white};
  min-width: 100%; // Minimally the width of the dropdown button
  max-height: 75vh;
  padding: 0.5rem 0;
  box-shadow: ${p => p.theme.shadow};
  overflow: auto;
`;

const IconWrapper = styled.div`
  width: 24px;
  text-align: right;
  font-size: 0;
`;

const Spinner = withTheme(({ theme }) => <LoadingSpinner size={theme.fontSizeBase} />);
Spinner.propTypes = { theme: PropTypes.object.isRequired };
Spinner.displayName = 'SpinnerFontSizeBase';

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
    const { disabled, label, selected, loading, onClick, open, fluid } = this.props;
    const { menuOpen } = this.state;

    return (
      <DropdownButton
        disabled={disabled}
        onClick={onClick}
        fluid={fluid}
        title={typeof label === 'string' ? label : undefined}
      >
        <Label>{label}</Label>
        <IconWrapper>
          {loading ? (
            <Spinner />
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
      persist,
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
        persist={persist}
        open={open}
      >
        <DropdownPanel>{children}</DropdownPanel>
      </ToggleMenu>
    );
  }
}

Dropdown.propTypes = {
  /** button label */
  label: PropTypes.node,
  /** Custom class name */
  className: PropTypes.string,
  /** Disable dropdown */
  disabled: PropTypes.bool,
  /** Show checkmark instead of dropdown caret */
  selected: PropTypes.bool,
  loading: PropTypes.bool,
  /** Contents of the dropdown */
  children: PropTypes.node.isRequired,
  /** Position of the dropdown panel */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  onClose: PropTypes.func,
  /** Flag to flip the menu position if out of viewport */
  preventOutOfBounds: PropTypes.bool,
  /** Makes the toggle button fluid (100% width) */
  fluid: PropTypes.bool,
  /** Makes dropdown panel stay after a click inside of it. */
  persist: PropTypes.bool,
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {
  label: 'Select',
  className: null,
  disabled: false,
  selected: false,
  loading: false,
  fluid: false,
  persist: false,
  onClose: () => null,
};

Dropdown.Item = DropdownItem;

export default Dropdown;
