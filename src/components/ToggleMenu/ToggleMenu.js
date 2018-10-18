import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TriggerWrapper = styled.span`
  display: inline-block;
  position: relative;
  pointer-events: ${props => (props.disabled ? 'none' : 'initial')};
  ${props => props.fluid && 'width: 100%;'};
`;

const MenuWrapper = styled.div`
  position: absolute;
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 10;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  margin: ${props => props.margin};
  min-width: 100%;
`;

class ToggleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: props.position,
    };
  }

  componentDidMount() {
    if (this.props.open) {
      this.addDocumentEventListeners();
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.open && prevProps.open) {
      this.removeDocumentEventListeners();
    } else if (this.props.open && !prevProps.open) {
      this.addDocumentEventListeners();
    }
  }

  componentWillUnmount() {
    this.removeDocumentEventListeners();
  }

  getPositionValues = position => {
    const { menuOffset } = this.props;
    const positions = {
      top: {
        bottom: '100%',
        left: '0',
        margin: `0 0 ${menuOffset} 0`,
      },
      bottom: {
        top: '100%',
        left: '0',
        margin: `${menuOffset} 0 0 0`,
      },
      left: {
        right: '100%',
        top: '0',
        margin: `0 ${menuOffset} 0 0`,
      },
      right: {
        left: '100%',
        top: '0',
        margin: `0 0 0 ${menuOffset}`,
      },
    };
    return positions[position];
  };

  getOppositePosition = position => {
    switch (position) {
      case 'top':
        return 'bottom';
      case 'bottom':
        return 'top';
      case 'left':
        return 'right';
      case 'right':
        return 'left';
      default:
        return position;
    }
  };

  addDocumentEventListeners = () => {
    document.addEventListener('click', this.handleClose);
    document.addEventListener('keydown', this.handleKeyDown);
  };

  removeDocumentEventListeners = () => {
    document.removeEventListener('click', this.handleClose);
    document.removeEventListener('keydown', this.handleKeyDown);
  };

  isMenuInViewport = () => {
    if (!this.menuRef) {
      return null;
    }

    const rect = this.menuRef.getBoundingClientRect();

    return {
      top: rect.top >= 0,
      left: rect.left >= 0,
      bottom: rect.bottom <= (window.innerHeight || document.documentElement.clientHeight),
      right: rect.right <= (window.innerWidth || document.documentElement.clientWidth),
    };
  };

  isControlled = () => typeof this.props.open !== 'undefined';

  handleOutOfBounds = (restoreOriginalPosition = false) => {
    const withinBounds = this.isMenuInViewport();
    const outOfBoundsSide = Object.keys(withinBounds).find(key => withinBounds[key] === false);
    if (!outOfBoundsSide) {
      // not out of bounds.
      return;
    }

    if (!restoreOriginalPosition) {
      this.setState({ position: this.getOppositePosition(outOfBoundsSide) }, () => {
        this.handleOutOfBounds(true);
      });
    } else {
      // restores the original position if both opposite sides are out of bounds.
      this.setState({ position: this.props.position });
    }
  };

  handleKeyDown = event => {
    if (event && event.keyCode === 27) {
      // escape key pressed;
      this.handleClose(event);
    }
  };

  handleOpen = event => {
    event.preventDefault();
    this.props.onOpen();
    if (this.isControlled()) {
      return;
    }

    this.setState({ open: true, position: this.props.position }, () => {
      if (this.props.closeOnOutsideClick) {
        this.addDocumentEventListeners();
      }
      if (this.props.preventOutOfBounds) {
        this.handleOutOfBounds();
      }
    });
  };

  handleClose = event => {
    if (!process.env.IS_STYLEGUIDE) {
      event.preventDefault();
    }
    if (this.menuRef.contains(event.target)) {
      return;
    }
    this.props.onClose();
    if (this.isControlled()) {
      return;
    }

    this.setState({ open: false }, () => {
      if (this.props.closeOnOutsideClick) {
        this.removeDocumentEventListeners();
      }
    });
  };

  toggleMenu = event => {
    if (this.props.open || this.state.open) {
      this.handleClose(event);
    } else {
      this.handleOpen(event);
    }
  };

  render() {
    const { trigger, children, className, disabled, fluid } = this.props;
    const { position } = this.state;
    const { top, bottom, left, right, margin } = this.getPositionValues(position);

    return (
      <TriggerWrapper
        onClick={this.toggleMenu}
        className={className}
        disabled={disabled}
        fluid={fluid}
      >
        {trigger}
        <MenuWrapper
          innerRef={c => {
            this.menuRef = c;
          }}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
          visible={this.props.open || this.state.open}
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
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  preventOutOfBounds: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  closeOnOutsideClick: PropTypes.bool,
  menuOffset: PropTypes.string, // distance between the menu and the trigger
  fluid: PropTypes.bool,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
};

ToggleMenu.defaultProps = {
  position: 'bottom',
  preventOutOfBounds: false,
  onOpen: () => null,
  onClose: () => null,
  closeOnOutsideClick: true,
  menuOffset: '5px',
  fluid: false,
};

export default ToggleMenu;
