import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';

import Icon from '../Icon';

import './Dropdown.scss';

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
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  };

  render() {
    const { label, className, children } = this.props;
    const { showMenu } = this.state;

    const dropdownClasses = classNames(className, {
      'ft--dropdown': true,
      'ft--dropdown--is-open': showMenu,
    });

    const dropdownButtonClasses = classNames(className, {
      'ft--dropdown__button': true,
    });

    return (
      <div className={dropdownClasses}>
        <button
          className={dropdownButtonClasses}
          onClick={this.showMenu}
        >
          {label}
          <Icon name="caret-down" color="green" />
        </button>

        {this.state.showMenu && (
          <div
            className="menu"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  /** button label */
  label: PropTypes.string,
  /** Custom class name */
  className: PropTypes.string,
  /** Contents of the dropdown */
  children: PropTypes.any,
};

Dropdown.defaultProps = {
  size: 'normal',
  disabled: false,
  appearance: 'secondary',
  type: 'button',
};
export default Dropdown;
