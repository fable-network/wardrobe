import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { fadeIn } from '../../animations';

const toolTipArrowBorder = css`
  ${p =>
    (p.appearance === 'light'
      ? 'solid 8px rgba(127, 127, 127, 0.2)'
      : `solid 8px ${p.theme.grey01}`)};
`;

const toolTipArrowBackground = css`
  ${p => (p.appearance === 'light' ? `solid 8px ${p.theme.white}` : `solid 8px ${p.theme.grey01}`)};
`;

const topAndBottomCss = css`
  left: 50%;
  transform: translateX(-50%);
  &::before,
  &::after {
    left: 0;
    right: 0;
  }
`;

const leftAndRightCss = css`
  top: 50%;
  transform: translateY(-50%);
  &::before,
  &::after {
    top: 0;
    bottom: 0;
  }
`;

const positionStyles = {
  top: css`
    ${topAndBottomCss};
    bottom: calc(100% + 16px);
    &::before {
      border-top: ${toolTipArrowBorder}
      bottom: -16px;
    }
    &::after {
      border-top: ${toolTipArrowBackground}
      bottom: -15px;
    }
  `,
  bottom: css`
    ${topAndBottomCss};
    top: calc(100% + 16px);
    &::before {
      border-bottom: ${toolTipArrowBorder}
      top: -16px;
    }
    &::after {
      border-bottom: ${toolTipArrowBackground}
      top: -15px;
    }
  `,
  left: css`
    ${leftAndRightCss};
    right: calc(100% + 16px);
    &::before {
      border-left: ${toolTipArrowBorder}
      right: -16px;
    }
    &::after {
      border-left: ${toolTipArrowBackground}
      right: -15px;
    }
  `,
  right: css`
    ${leftAndRightCss};
    left: calc(100% + 16px);
    &::before {
      border-right: ${toolTipArrowBorder}
      left: -16px;
    }
    &::after {
      border-right: ${toolTipArrowBackground}
      left: -15px;
    }
  `,
};

const ToolTipWrapper = styled('div')`
  position: absolute;
  box-sizing: border-box;
  color: ${p => (p.appearance === 'light' ? p.theme.grey01 : p.theme.white)};
  background: ${p => (p.appearance === 'light' ? p.theme.white : p.theme.grey01)};
  border-radius: ${p => p.theme.borderRadius};
  min-width: ${p => (p.fluid ? '100%' : '280px')};
  white-space: ${p => (p.fluid ? 'nowrap' : 'initial')};
  box-shadow: 0 1px 4px 0 rgba(49, 50, 51, 0.2);
  padding: 16px;
  z-index: ${p => p.theme.layerDropdown};
  animation: ${fadeIn()} 0.3s ease;

  &:before {
    box-sizing: border-box;
    content: '';
    border: solid 8px transparent;
    position: absolute;
    width: 8px;
    height: 8px;
    margin: auto;
  }

  &:after {
    box-sizing: border-box;
    content: '';
    border: solid 8px transparent;
    position: absolute;
    width: 8px;
    height: 8px;
    margin: auto;
  }
  ${p => positionStyles[p.position]};
`;

const TriggerWrapper = styled('div')`
  display: inline-block;
  position: relative;
`;

class ToolTip extends PureComponent {
  hideToolTipTimeout = null;

  state = { show: !this.props.trigger };

  showToolTip = () => {
    this.setState({ show: true }, () => {
      const { displayTime } = this.props;
      if (displayTime && !this.hideToolTipTimeout) {
        this.hideToolTipTimeout = setTimeout(this.hideToolTip, displayTime);
      }
    });
  };

  hideToolTip = () => {
    this.setState({ show: false }, () => {
      if (this.hideToolTipTimeout) {
        clearTimeout(this.hideToolTipTimeout);
        this.hideToolTipTimeout = null;
      }
    });
  };

  toggleToolTip = () => {
    if (this.state.show) {
      this.hideToolTip();
    } else {
      this.showToolTip();
    }
  };

  renderToolTip = () => {
    if (!this.state.show) {
      return null;
    }

    const { position, appearance, children, ...otherProps } = this.props;
    return (
      <ToolTipWrapper position={position} appearance={appearance} {...otherProps}>
        {children}
      </ToolTipWrapper>
    );
  };

  render() {
    const { trigger, triggerAction } = this.props;
    if (trigger) {
      return (
        <TriggerWrapper
          onClick={triggerAction === 'click' ? this.toggleToolTip : null}
          onMouseEnter={triggerAction === 'hover' ? this.showToolTip : null}
          onMouseLeave={triggerAction === 'hover' ? this.hideToolTip : null}
        >
          {trigger}
          {this.renderToolTip()}
        </TriggerWrapper>
      );
    }
    return this.renderToolTip();
  }
}

ToolTip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  appearance: PropTypes.oneOf(['light', 'dark']),
  children: PropTypes.node.isRequired,
  /** If available then the ToolTip will wrap itself with this trigger and show/hide based on the
   trigger action */
  trigger: PropTypes.node,
  triggerAction: PropTypes.oneOf(['click', 'hover']),
  /** If true, the tooltip will only take up the width of the content */
  fluid: PropTypes.bool,
  /** Duration in ms after which the tooltip is hidden (infinite by default) */
  displayTime: PropTypes.number,
};

ToolTip.defaultProps = {
  position: 'bottom',
  appearance: 'light',
  triggerAction: 'hover',
};

export default ToolTip;
