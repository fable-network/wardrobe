import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TriggerWrapper = styled.span`
  display: inline-block;
  position: relative;
  pointer-events: ${p => (p.disabled ? 'none' : 'initial')};
  ${p => p.fluid && 'width: 100%;'};
  max-width: 100%;
`;

const MenuWrapper = styled.div`
  position: absolute;
  display: ${p => (p.visible ? 'block' : 'none')};
  z-index: 10;
  top: ${p => p.top};
  bottom: ${p => p.bottom};
  left: ${p => p.left};
  right: ${p => p.right};
  margin: ${p => p.margin};
  min-width: 100%;
`;

const getDefaultDirection = position => {
  switch (position) {
    case 'left':
    case 'right':
      return 'bottom';
    default:
      return 'right';
  }
};

const getDerivedPosition = position => ({
  placement: position,
  direction: getDefaultDirection(position),
});

const getOppositeDirection = direction => {
  switch (direction) {
    case 'top':
      return 'bottom';
    case 'bottom':
      return 'top';
    case 'left':
      return 'right';
    case 'right':
      return 'left';
    default:
      return direction;
  }
};

class ToggleMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: getDerivedPosition(props.position),
    };
  }

  componentDidMount() {
    if (this.props.open) {
      if (this.props.closeOnOutsideClick) {
        this.addDocumentEventListeners();
      }
      if (this.props.preventOutOfBounds) {
        this.handleOutOfBounds();
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.open && prevProps.open) {
      if (prevProps.closeOnOutsideClick) {
        this.removeDocumentEventListeners();
      }
    } else if (this.props.open && !prevProps.open) {
      if (this.props.closeOnOutsideClick) {
        this.addDocumentEventListeners();
      }
      if (this.props.preventOutOfBounds) {
        this.handleOutOfBounds();
      }
    }
  }

  componentWillUnmount() {
    this.removeDocumentEventListeners();
  }

  getPositionValues = ({ placement, direction }) => {
    const { menuOffset } = this.props;
    const offsetProp = getOppositeDirection(direction);
    const positions = {
      top: {
        bottom: '100%',
        [offsetProp]: '0',
        margin: `0 0 ${menuOffset} 0`,
      },
      bottom: {
        top: '100%',
        [offsetProp]: '0',
        margin: `${menuOffset} 0 0 0`,
      },
      left: {
        right: '100%',
        [offsetProp]: '0',
        margin: `0 ${menuOffset} 0 0`,
      },
      right: {
        left: '100%',
        [offsetProp]: '0',
        margin: `0 0 0 ${menuOffset}`,
      },
    };
    return positions[placement];
  };

  getPreferredPosition = withinBounds => {
    const { position } = this.state;
    const { placement, direction } = position;
    return {
      placement: withinBounds[placement] ? placement : getOppositeDirection(placement),
      direction: withinBounds[direction] ? direction : getOppositeDirection(direction),
    };
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
    const allWithin = Object.keys(withinBounds).filter(key => !withinBounds[key]).length === 0;
    if (allWithin) {
      return;
    }

    if (!restoreOriginalPosition) {
      this.setState({ position: this.getPreferredPosition(withinBounds) }, () => {
        this.handleOutOfBounds(true);
      });
    } else {
      // restores the original position if both opposite sides are out of bounds.
      this.setState({
        position: getDerivedPosition(this.props.position),
      });
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

    this.setState({ open: true, position: getDerivedPosition(this.props.position) }, () => {
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
    if (this.props.persist && this.menuRef.contains(event.target)) {
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
  /** Distance between the menu and the trigger. */
  menuOffset: PropTypes.string,
  fluid: PropTypes.bool,
  open: PropTypes.bool,
  persist: PropTypes.bool,
  disabled: PropTypes.bool,
};

ToggleMenu.defaultProps = {
  position: 'bottom',
  preventOutOfBounds: true,
  onOpen: () => null,
  onClose: () => null,
  closeOnOutsideClick: true,
  menuOffset: '0.25rem',
  fluid: false,
  persist: false,
};

export default ToggleMenu;
