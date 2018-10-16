import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as focusScope from 'a11y-focus-scope';
import * as focusStore from 'a11y-focus-store';
import { DESKTOP } from '../../constants/Breakpoints';

const Backdrop = styled.section`
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
`;

const ModalWrapper = styled.div`
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
  previousBodyOverflow = null;

  componentDidMount() {
    const { open } = this.props;
    if (open) {
      this.handleShow();
    }
  }

  componentDidUpdate({ open: prevOpen }) {
    const { open } = this.props;
    if (!prevOpen && open) {
      this.handleShow();
    } else if (prevOpen && !open) {
      this.handleHide();
    }
  }

  componentWillUnmount() {
    this.handleHide();
  }

  addEventListeners = () => {
    if (!document) return;
    document.addEventListener('keydown', this.handleDocumentKeydown);
  };

  removeEventListeners = () => {
    if (!document) return;
    document.removeEventListener('keydown', this.handleDocumentKeydown);
  };

  blockGlobalScroll = () => {
    if (!document) return;
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  };

  unblockGlobalScroll = () => {
    if (!document) return;
    document.body.style.overflow = this.previousBodyOverflow;
    this.previousBodyOverflow = null;
  };

  handleShow = () => {
    focusStore.storeFocus();
    focusScope.scopeFocus(this.modal);
    this.addEventListeners();
    if (this.props.preventGlobalScroll) {
      this.blockGlobalScroll();
    }
  };

  handleHide = () => {
    focusScope.unscopeFocus();
    focusStore.restoreFocus();
    this.removeEventListeners();
    if (this.props.preventGlobalScroll) {
      this.unblockGlobalScroll();
    }
  };

  handleDocumentKeydown = event => {
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  };

  handleBackdropClick = () => {
    this.props.onClose();
  };

  handleModalClick = event => {
    event.stopPropagation();
  };

  handleRef = element => {
    this.modal = element;
  };

  render() {
    const { backdropColor, open, children, ...otherProps } = this.props;
    if (!open) {
      return null;
    }
    return (
      <Backdrop backdropColor={backdropColor} role="dialog" onClick={this.handleBackdropClick}>
        <ModalWrapper
          {...otherProps}
          innerRef={this.handleRef}
          onClick={this.handleModalClick}
          tabIndex="-1"
        >
          <Content>{children}</Content>
        </ModalWrapper>
      </Backdrop>
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
