import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import KEY_CODES from '../../helpers/keyCodes';

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
    document.addEventListener('click', this.handleDocumentClick, true);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
  };

  removeDocumentEventListeners = () => {
    document.removeEventListener('click', this.handleDocumentClick, true);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
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

  handleDocumentKeyDown = event => {
    if (event && event.keyCode === KEY_CODES.Esc) {
      // escape key pressed;
      this.props.onClose(event);
    }
  };

  handleDocumentClick = event => {
    const clickedInMenu = this.menuRef.contains(event.target);
    if (this.props.persist && clickedInMenu) {
      return;
    }
    if (this.wrapperRef.contains(event.target) && !clickedInMenu) {
      return;
    }
    if (this.props.open) {
      this.props.onClose(event);
    }
  };

  toggleMenu = (event) => {
    if (this.props.open) {
      this.props.onClose(event);
    } else {
      this.props.onOpen(event);
    }
  };

  render() {
    const { renderTrigger, children, className, disabled, fluid, innerRef } = this.props;
    const { position } = this.state;
    const { top, bottom, left, right, margin } = this.getPositionValues(position);

    return (
      <TriggerWrapper
        className={className}
        disabled={disabled}
        fluid={fluid}
        innerRef={c => {
          this.wrapperRef = c;
          if (innerRef) {
            innerRef(c);
          }
        }}
      >
        {renderTrigger({ toggle: this.toggleMenu })}
        <MenuWrapper
          innerRef={c => {
            this.menuRef = c;
          }}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
          visible={this.props.open}
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
  renderTrigger: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  preventOutOfBounds: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnOutsideClick: PropTypes.bool,
  /** Distance between the menu and the trigger. */
  menuOffset: PropTypes.string,
  fluid: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  persist: PropTypes.bool,
  disabled: PropTypes.bool,
  innerRef: PropTypes.func,
};

ToggleMenu.defaultProps = {
  position: 'bottom',
  preventOutOfBounds: true,
  closeOnOutsideClick: true,
  menuOffset: '0.25rem',
  fluid: false,
  persist: false,
};

export default ToggleMenu;
