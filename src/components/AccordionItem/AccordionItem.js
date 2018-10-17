import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import noop from '../../helpers/noop';
import KEY_CODES from '../../helpers/keyCodes';

import { slideIn } from '../../constants/Animations';
import Icon from '../Icon';
import { hexToRgba } from '../../helpers/colors';

const addOpacity = color => (color ? hexToRgba(color, 0.5) : color);

const TitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: solid 1px ${p => addOpacity(p.theme.dark)};
  cursor: pointer;
`;

const Title = styled('span')`
  font-weight: 500;
`;

const ChildrenWrapper = styled('div')`
  transition: 0.3s ease-out;
  display: ${p => (p.open ? 'block' : 'none')};
  opacity: ${p => (p.open ? '1' : '0')};
  padding: 0 16px;
  border-bottom: solid 1px ${p => addOpacity(p.theme.dark)};
  animation: ${slideIn('-20px')} 0.3s ease;
`;

const Wrapper = styled('div')`
  transition: 0.3s ease-out;
  pointer-events: ${p => (p.disabled ? 'none' : 'initial')};
  opacity: ${p => (p.disabled ? '0.4' : '1')};
  &:first-child {
    ${TitleWrapper} {
      border-top: solid 1px ${p => addOpacity(p.theme.dark)};
    }
  }
`;

const StyledIcon = styled(Icon)`
  transform: rotateX(${p => (p.open ? '-180deg' : '0deg')});
  transition: transform 150ms ease-in-out;
`;

/**
 * Single item in the Accordion panel.
 *
 * @visibleName Accordion.Item
 */
class AccordionItem extends Component {
  state = {
    open: this.props.defaultOpen,
  };

  isControlled = () => typeof this.props.open !== 'undefined';

  toggleOpenState = () => this.setState(({ open }) => ({ open: !open }));

  handleToggleRequested = event => {
    if (this.props.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.props.onToggle(event);
    if (!this.isControlled() && !event.defaultPrevented) {
      this.toggleOpenState();
    }
    event.preventDefault();
  };

  handleKeyDown = event => {
    if (event.keyCode === KEY_CODES.Space || event.keyCode === KEY_CODES.Enter) {
      this.handleToggleRequested(event);
    }
  };

  render() {
    const { children, disabled, tabIndex, title, ...otherProps } = this.props;
    const open = this.isControlled() ? this.props.open : this.state.open;
    const hasTitle = typeof title === 'string';

    return (
      <Wrapper disabled={disabled}>
        <TitleWrapper
          data-testid="accordion-item--title-wrapper"
          {...otherProps}
          tabIndex={tabIndex}
          role="button"
          onClick={this.handleToggleRequested}
          onKeyDown={this.handleKeyDown}
        >
          {hasTitle ? <Title>{title}</Title> : title}
          <StyledIcon open={open} name="caret-down" width={16} height={9} />
        </TitleWrapper>
        <ChildrenWrapper
          data-testid="accordion-item--children-wrapper"
          open={open}
          innerRef={c => {
            this.bodyRef = c;
          }}
        >
          {children}
        </ChildrenWrapper>
      </Wrapper>
    );
  }
}

AccordionItem.propTypes = {
  children: PropTypes.node,
  /** `true`, if the item should be initially open. Works only on a first render.  */
  defaultOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Use this prop if you want to control the item's state. */
  open: PropTypes.bool,
  tabIndex: PropTypes.number,
  title: PropTypes.node,
  onToggle: PropTypes.func,
};

AccordionItem.defaultProps = {
  defaultOpen: false,
  disabled: false,
  tabIndex: 0,
  title: undefined,
  onToggle: noop,
};

export default AccordionItem;
