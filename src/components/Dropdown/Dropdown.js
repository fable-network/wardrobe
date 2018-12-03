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
  dispatchKeyboardEvent,
} from '../../helpers/dom';
import { paddingHorizontal, paddingVertical } from '../../helpers/styled';
import KEY_CODES from '../../helpers/keyCodes';
import noop from '../../helpers/noop';

import ToggleMenu from '../ToggleMenu';
import DropdownItem from '../DropdownItem';
import Icon from '../Icon';
import LoadingSpinner from '../LoadingSpinner';

const DropdownButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  box-sizing: border-box;
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

const Input = styled.input`
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  display: inline-block;
  flex-grow: 1;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizeBase};
  line-height: ${p => p.theme.lineHeightControlBase};
  color: ${p => (p.disabled ? p.theme.grey04 : p.theme.grey01)};
  max-width: 100%;
  white-space: nowrap;
  &:focus {
    outline: none;
  }
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
  background-color: ${p => p.theme.white};
  min-width: 100%; /* Minimally the width of the dropdown button */
  max-height: 320px;
  padding: 0.5rem 0;
  box-shadow: ${p => p.theme.shadow};
  overflow: auto;
  /* If last interaction is mouse, we highlight hovered item, and if it's keyboard, we highlight focused item. */
  ${p =>
    p.lastInteractionKeyboard
    && css`
      ${DropdownItem} {
        &:hover {
          background-color: ${p.theme.white};
        }
        &:focus {
          background-color: ${p.theme.grey05};
          outline: 0px none;
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
      searchText: '',
    };
    /** A dropdown panel (with items). */
    this.panel = null;
    /** A wrapper for the whole dropdown including panel. */
    this.wrapper = null;
    /** Saved hovered item (to ensure correct keyboard interactions with it). */
    this.hoveredItem = null;
    /** A dropdown button component. */
    this.dropdownButton = null;
    this.saveHoveredElemDebounced = debounce(this.saveHoveredElem, 50, {
      maxWait: 50,
    });
  }

  componentDidMount() {
    if (process.env.IS_STYLEGUIDE) {
      return;
    }
    if (this.isControlled() && this.props.open && this.wrapper) {
      // Tabulation will go over all panel contents and button / search field
      focusScope.scopeFocus(this.wrapper);
    }
  }

  componentDidUpdate(prevProps) {
    if (process.env.IS_STYLEGUIDE) {
      return;
    }
    if (this.isControlled() && this.panel) {
      if (this.props.open && !prevProps.open) {
        focusScope.scopeFocus(this.wrapper);
      } else if (!this.props.open && prevProps.open) {
        this.hoveredItem = null;
        focusScope.unscopeFocus();
        // Reset search results after closing
        this.props.onSearch('');
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.open && prevState.searchText) {
      // Reset search results after closing
      return { searchText: '' };
    }
    return null;
  }

  getIcon = () => {
    const { selected } = this.props;

    return selected ? 'caret-selected' : 'caret-down';
  };

  isControlled = () => typeof this.props.open !== 'undefined';

  isOpen = () => (this.isControlled() ? this.props.open : this.state.menuOpen);

  saveHoveredElem = target => {
    if (this.state.lastInteractionKeyboard) return;
    // Save the topmost tabbable panel child under the mouse (if found one) for future
    // keyboard interactions
    const elem = findSelfOrParentInContainer(this.panel, target);
    if (elem && isTabbable(elem)) {
      this.hoveredItem = elem;
    }
  };

  /**
   * Go to previous element or close if we're on the first already.
   */
  handleGoToPrevElement = event => {
    event.preventDefault();
    const prevElem = prevTabbable(this.panel);
    if (prevElem) {
      this.hoveredItem = null;
      prevElem.focus();
    } else if (this.isOpen() && this.props.search && this.panel.contains(document.activeElement)) {
      this.input.focus();
    } else {
      this.handleMenuClose(event);
    }
  };

  /**
   * Go to the next element or to the first if we're on the last already.
   */
  handleGoToNextElement = event => {
    event.preventDefault();
    const nextElem = nextTabbable(this.panel);
    if (nextElem) {
      this.hoveredItem = null;
      nextElem.focus();
    }
  };

  handleMenuOpen = () => {
    this.props.onOpen();
    if (!this.isControlled() && !this.state.menuOpen) {
      this.setState({ menuOpen: true }, () => {
        focusScope.scopeFocus(this.wrapper);
      });
    }
  };

  handleMenuClose = event => {
    this.props.onClose();
    const { target, keyCode } = event || {};
    // We focus trigger if closed using keyboard inside the wrapper
    // Don't focus if closed by clicking outside. Also don't focus if used keyboard outside.
    const shouldFocusTrigger = keyCode && target && this.wrapper.contains(target);
    if (!this.isControlled() && this.state.menuOpen) {
      this.setState({ menuOpen: false, searchText: '' }, () => {
        this.hoveredItem = null;
        focusScope.unscopeFocus();
        // Reset search results after closing
        this.props.onSearch('');
        if (shouldFocusTrigger) {
          this.dropdownButton.focus();
        }
      });
    } else if (shouldFocusTrigger) {
      this.dropdownButton.focus();
    }
  };

  /**
   * Keydown handler for a dropdown panel (which has items inside).
   */
  handlePanelKeyDown = event => {
    const { persist } = this.props;
    switch (event.keyCode) {
      case KEY_CODES.Up: {
        if (this.isOpen()) {
          this.handleGoToPrevElement(event);
        }
        break;
      }
      case KEY_CODES.Down: {
        if (this.isOpen()) {
          this.handleGoToNextElement(event);
        }
        break;
      }
      case KEY_CODES.Space:
        // Can commit the choice with a Spacebar, but only if we're not in the search field
        if (this.isOpen() && document.activeElement !== this.input && !persist) {
          event.persist();
          event.preventDefault();
          this.handleMenuClose(event);
        }
        break;
      case KEY_CODES.Enter:
        // Can always commit with Enter
        if (this.isOpen() && !persist) {
          event.persist();
          event.preventDefault();
          this.handleMenuClose(event);
        }
        break;
      default:
        break;
    }
  };

  /**
   * Keydown handler for a trigger (so button, also get's keydowns from input inside it).
   */
  handleTriggerKeyDown = toggle => event => {
    switch (event.keyCode) {
      case KEY_CODES.Up:
        if (this.isOpen()) {
          this.handleGoToPrevElement(event);
        }
        break;
      case KEY_CODES.Down:
        event.preventDefault();
        if (this.isOpen()) {
          this.handleGoToNextElement(event);
        } else {
          this.handleMenuOpen(event);
          // Just focus the search field first if `search=true`
          // Then the next Down key press on the input field will go to the first element
          // with `this.handlePanelKeyDown`.
          if (!this.props.search) {
            this.handleGoToNextElement(event);
          }
        }
        break;
      case KEY_CODES.Space:
        if (document.activeElement !== this.input) {
          // Use Spacebar on the button to toggle, but only if not focused in the search field
          // Otherwise user won't be able to type spaces
          event.preventDefault();
          toggle(event);
        }
        break;
      case KEY_CODES.Enter:
        // Enter on the button always toggles
        event.preventDefault();
        toggle(event);
        break;
      default:
        break;
    }
  };

  /**
   * Captures keydown events on both panel and button to:
   * 1. Set last interaction method.
   * 2. Create a keydown event for a hovered but not focused item.
   */
  handleKeyDownCapture = event => {
    if (this.state.lastInteractionKeyboard) return;
    // If we hover a dropdown item AND it's not focused AND we allow keyboard interaction
    // (so we're not focused in the search field or it's an Enter)
    if (
      this.hoveredItem
      && document.activeElement !== this.hoveredItem
      && (document.activeElement !== this.input || event.keyCode === KEY_CODES.Enter)
    ) {
      // Focus the hovered item so that it gets all next keyboard events (use case: hover
      // and press Down)
      this.hoveredItem.focus();

      // We'll create a new event and:
      // 1. Don't want duplication of events on the upper level (where we decide to open/close
      //    the Dropdown)
      // 2. If there's a focused item which IS NOT a hovered item and user last used mouse,
      //    we won't want this focused item to finally get the event, since user is interacting with
      //    the hovered item now.
      // Therefore we preven defaul and stop propagation.
      event.preventDefault();
      event.stopPropagation();

      // Now we manually create a keydown event on the item user last interacted with (using mouse)
      // So that it reacts to the keydown (`onSelect` in Dropdown.Item if it's Space or Enter)
      // and then the upper level logic (handlePanelKeyDown and handleTriggerKeyDown) will work.
      dispatchKeyboardEvent('keydown', this.hoveredItem, event.keyCode);
    }
    // Save the last interaction as keyboard to highlight the focused (rather than hovered) element.
    this.setState({ lastInteractionKeyboard: true });
  };

  handlePanelMouseMove = event => {
    this.saveHoveredElemDebounced(event.target);
    if (this.state.lastInteractionKeyboard) {
      this.setState({ lastInteractionKeyboard: false });
    }
  };

  handleInputChange = event => {
    const searchText = event.target.value;
    this.setState({ searchText });
    this.props.onSearch(searchText);
  };

  handleInputClick = event => {
    // Don't want to open or close (in `this.handleTriggerClick`), just focusing the input
    // Also: consider using onMouseDown instead to make it faster on mobiles
    event.stopPropagation();
  };

  handleTriggerClick = toggle => () => {
    toggle();
    this.props.onClick();
  };

  renderTrigger = ({ toggle }) => {
    const { disabled, label, selected, loading, open, fluid, search, placeholder } = this.props;
    const { menuOpen, searchText } = this.state;
    const showInput = search && menuOpen;

    // Keep the same icon in both modes (search / no search) to not ruin the chevron animation
    return (
      <DropdownButton
        disabled={disabled}
        onClick={this.handleTriggerClick(toggle)}
        onKeyDown={this.handleTriggerKeyDown(toggle)}
        onKeyDownCapture={this.handleKeyDownCapture}
        fluid={fluid}
        title={typeof label === 'string' ? label : undefined}
        tabIndex={showInput ? -1 : 0}
        innerRef={node => {
          this.dropdownButton = node;
        }}
        role="button"
      >
        {showInput ? (
          <Input
            onChange={this.handleInputChange}
            onClick={this.handleInputClick}
            placeholder={placeholder}
            value={searchText}
            innerRef={node => {
              this.input = node;
            }}
          />
        ) : (
          <Label>{label}</Label>
        )}
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
      fluid,
      persist,
    } = this.props;
    const { lastInteractionKeyboard } = this.state;

    return (
      <ToggleMenu
        renderTrigger={this.renderTrigger}
        className={className}
        onOpen={this.handleMenuOpen}
        onClose={this.handleMenuClose}
        position={position}
        preventOutOfBounds={preventOutOfBounds}
        disabled={disabled}
        fluid={fluid}
        persist={persist}
        open={this.isOpen()}
        innerRef={node => {
          this.wrapper = node;
        }}
      >
        <DropdownPanel
          lastInteractionKeyboard={lastInteractionKeyboard}
          onKeyDown={this.handlePanelKeyDown}
          onKeyDownCapture={this.handleKeyDownCapture}
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
  /** Flag to flip the menu position if out of viewport */
  preventOutOfBounds: PropTypes.bool,
  /** Makes the toggle button fluid (100% width) */
  fluid: PropTypes.bool,
  /** Makes dropdown panel stay after a click inside of it. */
  persist: PropTypes.bool,
  /** Allow searching */
  search: PropTypes.bool,
  /** A placeholder for a search field. */
  placeholder: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onClick: PropTypes.func,
  onSearch: PropTypes.func,
};

Dropdown.defaultProps = {
  label: 'Select',
  className: null,
  disabled: false,
  selected: false,
  loading: false,
  fluid: false,
  persist: false,
  search: false,
  placeholder: '',
  onClose: noop,
  onOpen: noop,
  onClick: noop,
  onSearch: noop,
};

Dropdown.Item = DropdownItem;

export default Dropdown;
