import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import * as focusScope from 'a11y-focus-scope';
import debounce from 'lodash.debounce';
import {
  nextTabbable,
  prevTabbable,
  findSelfOrParentInContainer,
  isTabbable,
} from '../../helpers/dom';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';
import KEY_CODES from '../../helpers/keyCodes';

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
  ${p => p.fluid && 'width: 100%;'};
  background-color: ${p => p.theme.white};
  border: solid 1px ${p => (p.disabled ? p.theme.grey04 : p.theme.grey03)};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizeBase};
  ${p => paddingHorizontal(`calc(${p.theme.paddingHorizontalBase} - 1px)`)};
  ${p => paddingVertical(`calc(${p.theme.paddingVerticalBase} - 1px)`)};
  color: ${p => (p.disabled ? p.theme.grey04 : p.theme.grey01)};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  user-select: ${p => (p.disabled ? 'none' : 'initial')};
  &:focus {
    outline: none;
    box-shadow: 0 0 4px ${p => p.theme.primary};
    border-color: ${p => p.theme.primary};
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
  transform: rotateX(${p => (p.open && !p.selected ? '-180deg' : '0deg')});
  transition: transform 150ms ease-in-out;
`;

const DropdownPanel = styled.div`
  background: ${p => p.theme.white};
  min-width: 100%; // Minimally the width of the dropdown button
  max-height: 320px;
  padding: 0.5rem 0;
  box-shadow: ${p => p.theme.shadow};
  overflow: auto;
  ${p =>
    p.lastInteractionKeyboard
    && css`
      ${DropdownItem} {
        &:focus {
          background-color: ${p.theme.grey05};
          outline: 0px none;
        }
      }
    `};
  ${p =>
    !p.lastInteractionKeyboard
    && css`
      ${DropdownItem} {
        &:hover {
          background-color: ${p.theme.grey05};
        }
      }
    `};
`;

const IconWrapper = styled.div`
  width: 24px;
  text-align: right;
  font-size: 0;
`;

const Spinner = withTheme(({ theme }) => <LoadingSpinner size={theme.fontSizeBase} />);
Spinner.displayName = 'SpinnerFontSizeBase';

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
      lastInteractionKeyboard: false,
    };
    this.panel = null;
    this.hoveredItem = null;
    this.saveHoveredElemDebounced = debounce(this.saveHoveredElem, 50, {
      maxWait: 50,
    });
  }

  componentDidMount() {
    if (process.env.IS_STYLEGUIDE || process.env.NODE_ENV === 'test') {
      return;
    }
    if (this.isControlled() && this.props.open) {
      focusScope.scopeFocus(this.panel);
    }
  }

  componentDidUpdate(prevProps) {
    if (process.env.IS_STYLEGUIDE || process.env.NODE_ENV === 'test') {
      return;
    }
    if (this.isControlled() && this.panel) {
      if (this.props.open && !prevProps.open) {
        focusScope.scopeFocus(this.panel);
      } else if (!this.props.open && prevProps.open) {
        this.hoveredItem = null;
        focusScope.unscopeFocus();
      }
    }
  }

  getIcon = () => {
    const { selected } = this.props;

    return selected ? 'caret-selected' : 'caret-down';
  };

  isControlled = () => typeof this.props.open !== 'undefined';

  saveHoveredElem = target => {
    if (this.state.lastInteractionKeyboard) return;
    const elem = findSelfOrParentInContainer(this.panel, target);
    if (elem && isTabbable(elem)) {
      this.hoveredItem = elem;
    }
  };

  handleMenuOpen = () => {
    if (!this.isControlled() && !this.state.menuOpen) {
      this.setState({ menuOpen: true }, () => {
        focusScope.scopeFocus(this.panel);
      });
    }
  };

  handleMenuClose = () => {
    this.props.onClose();
    if (!this.isControlled() && this.state.menuOpen) {
      this.setState({ menuOpen: false }, () => {
        this.hoveredItem = null;
        focusScope.unscopeFocus();
      });
    }
  };

  handlePanelKeyDown = event => {
    switch (event.keyCode) {
      case KEY_CODES.Down: {
        event.preventDefault();
        const nextElem = nextTabbable(this.panel);
        if (nextElem) {
          this.hoveredItem = null;
          nextElem.focus();
        }
        break;
      }
      case KEY_CODES.Up: {
        event.preventDefault();
        const nextElem = prevTabbable(this.panel);
        if (nextElem) {
          this.hoveredItem = null;
          nextElem.focus();
        }
        break;
      }
      default:
        break;
    }
  };

  handlePanelKeyDownCapture = () => {
    if (this.state.lastInteractionKeyboard) return;
    if (this.hoveredItem) {
      this.hoveredItem.focus();
    }
    this.setState({ lastInteractionKeyboard: true });
  };

  handlePanelMouseMove = event => {
    this.saveHoveredElemDebounced(event.target);
    if (this.state.lastInteractionKeyboard) {
      this.setState({ lastInteractionKeyboard: false });
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
    const { lastInteractionKeyboard } = this.state;

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
        <DropdownPanel
          lastInteractionKeyboard={lastInteractionKeyboard}
          onKeyDown={this.handlePanelKeyDown}
          onKeyDownCapture={this.handlePanelKeyDownCapture}
          onMouseMove={this.handlePanelMouseMove}
          innerRef={node => {
            this.panel = node;
          }}
        >
          {children}
        </DropdownPanel>
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
