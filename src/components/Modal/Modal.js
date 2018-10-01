import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseModal from 'react-modal2';
import { DESKTOP } from '../../constants/Breakpoints';

const Root = styled.section`
  .ft-modal--backdrop {
    position: fixed;
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-height: 100vh;
    background-color: ${props => props.backdropColor || 'rgba(0, 0, 0, 0.61)'};
    z-index: 9999;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .ft--modal--dialog {
    z-index: 10000;
    position: absolute;
    max-height: 100vh;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:focus {
      outline: none;
    }
    @media ${DESKTOP} {
      width: auto;
    }
  }
`;

const Content = styled.div`
  height: 100vh;
  @media ${DESKTOP} {
    height: auto;
    margin: 20px 0;
  }
`;

/**
 * Modal component.
 */
class Modal extends Component {
  preventBodyOverflow = null;

  componentDidMount() {
    const { open, preventGlobalScroll } = this.props;
    if (open && preventGlobalScroll) {
      this.blockGlobalScroll();
    }
  }

  componentDidUpdate({ open: prevOpen }) {
    const { open, preventGlobalScroll } = this.props;
    if (!preventGlobalScroll) {
      return;
    }
    if (!prevOpen && open) {
      this.blockGlobalScroll();
    } else if (prevOpen && !open) {
      this.unblockGlobalScroll();
    }
  }

  blockGlobalScroll() {
    if (!document) return;
    this.preventBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  unblockGlobalScroll() {
    if (!document) return;
    document.body.style.overflow = this.preventBodyOverflow;
    this.preventBodyOverflow = null;
  }

  render() {
    const { backdropColor, open, children, onClose } = this.props;
    if (!open) {
      return null;
    }
    return (
      <Root backdropColor={backdropColor} role="dialog">
        <BaseModal
          onClose={onClose}
          closeOnEsc
          closeOnBackdropClick
          backdropClassName="ft-modal--backdrop"
          modalClassName="ft--modal--dialog"
        >
          <Content>{children}</Content>
        </BaseModal>
      </Root>
    );
  }
}

Modal.defaultProps = {
  preventGlobalScroll: true,
};

Modal.propTypes = {
  backdropColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  preventGlobalScroll: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

/** @component */
export default Modal;

// Screen-readers support opt-out. See https://github.com/cloudflare/react-modal2#accessibility
BaseModal.getApplicationElement = () => null;
