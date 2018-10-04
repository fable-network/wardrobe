import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { slideIn } from '../../constants/Animations';
import Icon from '../Icon';
import { hexToRgba } from '../../helpers/colors';

const TitleWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: solid 1px ${p => hexToRgba(p.theme.stoneGrey, 0.5)};
  cursor: pointer;
`;

const Title = styled('span')`
  font-weight: 500;
`;

const ChildrenWrapper = styled('div')`
  transition: .3s ease-out;
  display: ${p => (p.isOpen ? 'block' : 'none')};
  opacity: ${p => (p.isOpen ? '1' : '0')};
  padding: 0 15px;
  border-bottom: solid 1px ${p => hexToRgba(p.theme.stoneGrey, 0.5)};
  animation: ${slideIn('-20px')} .3s ease;
`;

const Wrapper = styled('div')`
  transition: .3s ease-out;
  pointer-events: ${p => (p.isDisabled ? 'none' : 'initial')};
  opacity: ${p => (p.isDisabled ? '0.4' : '1')};
  &:first-child {
    ${TitleWrapper} {
      border-top: solid 1px ${p => hexToRgba(p.theme.stoneGrey, 0.5)};
    }
  }
`;

const StyledIcon = styled(Icon)`
  transform: rotateX(${p => (p.open ? '-180deg' : '0deg')});
  transition: transform 150ms ease-in-out;
`;

class AccordionItem extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  isControlled = () =>
    typeof this.props.isOpen !== 'undefined';

  toggleOpenState = () =>
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick();
    if (!this.isControlled()) {
      this.toggleOpenState();
    }
  }

  render() {
    const { isDisabled, title, children } = this.props;
    const isOpen = this.isControlled() ? this.props.isOpen : this.state.isOpen;
    const isTitleString = typeof title === 'string';

    return (
      <Wrapper isDisabled={isDisabled}>
        <TitleWrapper onClick={this.handleClick}>
          {isTitleString ? <Title>{title}</Title> : title}
          <StyledIcon
            open={isOpen}
            name="caret-down"
            width={16}
            height={9}
          />
        </TitleWrapper>
        <ChildrenWrapper
          isOpen={isOpen}
          innerRef={c => { this.bodyRef = c; }}
        >
          {children}
        </ChildrenWrapper>
      </Wrapper>
    );
  }
}

AccordionItem.displayName = 'AccordionItem';

AccordionItem.defaultProps = {
  onClick: () => null
};

AccordionItem.propTypes = {
  isDisabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  title: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default AccordionItem;
