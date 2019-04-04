import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import noop from '../../helpers/noop';
import KEY_CODES from '../../helpers/keyCodes';

/**
 * Single item in the dropdown panel. This adds the necessary padding for simple text labels.
 */
class DropdownItem extends React.Component {
  handleClick = event => {
    const { value, onClick, onSelect } = this.props;
    if (typeof onClick === 'function') {
      onClick(event);
      if (event.defaultPrevented) return;
    }
    onSelect(value);
  };

  handleKeyDown = event => {
    const { value, onKeyDown, onSelect } = this.props;
    if (typeof onKeyDown === 'function') {
      onKeyDown(event);
      if (event.defaultPrevented) return;
    }
    if (event.keyCode === KEY_CODES.Enter || event.keyCode === KEY_CODES.Space) {
      onSelect(value);
    }
  };

  render() {
    const { children, onSelect, ...otherProps } = this.props;
    return (
      <div
        {...otherProps}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
        role="button"
      >
        {children}
      </div>
    );
  }
}

DropdownItem.propTypes = {
  /** Label or other contents of the item */
  children: PropTypes.node,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
  ]),
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

DropdownItem.defaultProps = {
  onSelect: noop,
};

/**
 * @component
 * @visibleName Dropdown.Item
 */
export default styled(DropdownItem)`
  padding: 0.5rem 1rem;
  color: ${p => p.theme.grey01};
  cursor: pointer;
  outline: 0px none;
  &:hover {
    background-color: ${p => p.theme.grey06};
  }
`;
