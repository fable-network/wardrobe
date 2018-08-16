import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TriggerWrapper = styled.span`
  display: inline-block;
  position: relative;
`;

const MenuWrapper = styled.div`
  position: absolute;
  z-index: 1;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  margin: ${props => props.margin};
`;

class ToggleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.openByDefault
    };
  }

  getPositionValues = (position) => {
    const { menuOffset } = this.props;
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '0', margin: `0 0 ${menuOffset} 0` };
      case 'bottom':
        return { top: '100%', left: '0', margin: `${menuOffset} 0 0 0` };
      case 'left':
        return { top: '0', right: '100%', margin: `0 ${menuOffset} 0 0` };
      case 'right':
        return { top: '0', left: '100%', margin: `0 0 0 ${menuOffset}` };
      default:
        return { top: '100%', left: '0', margin: `${menuOffset} 0 0 0` };
    }
  }

  handleOpen = (event) => {
    event.preventDefault();

    this.props.onOpen();
    this.setState({ open: true }, () => {
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleClose);
      }
    });
  }

  handleClose = (event) => {
    event.preventDefault();

    this.props.onClose();
    this.setState({ open: false }, () => {
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleClose);
      }
    });
  }

  toggleMenu = (event) => {
    const { open } = this.state;
    if (open) {
      this.handleClose(event);
    } else {
      this.handleOpen(event);
    }
  }

  render() {
    const { trigger, children, position, className } = this.props;
    const { top, bottom, left, right, margin } = this.getPositionValues(position);
    const { open } = this.state;

    return (
      <TriggerWrapper onClick={this.toggleMenu} className={className}>
        {trigger}
        <MenuWrapper
          top={top}
          bottom={bottom}
          left={left}
          right={right}
          visible={open}
          margin={margin}
        >
          {children}
        </MenuWrapper>
      </TriggerWrapper>
    );
  }
}

ToggleMenu.propTypes = {
  className: PropTypes.string,
  openByDefault: PropTypes.bool,
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  preventOutOfBounds: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  closeOnOutsideClick: PropTypes.bool,
  menuOffset: PropTypes.string, // distance between the menu and the trigger
};

ToggleMenu.defaultProps = {
  openByDefault: false,
  position: 'bottom',
  preventOutOfBounds: true,
  onOpen: () => {},
  onClose: () => {},
  closeOnOutsideClick: true,
  menuOffset: '5px'
};

export default ToggleMenu;
