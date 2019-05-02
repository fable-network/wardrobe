import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as focusScope from 'a11y-focus-scope';
import * as focusStore from 'a11y-focus-store';
import { theme as defaultTheme } from '../../theme';
import generateId from '../../helpers/generateId';

const Backdrop = styled.section`
  position: fixed;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 100vh;
  background-color: ${p => p.backdropColor || 'rgba(0, 0, 0, 0.61)'};
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
  ${p => (p.theme.desktop_up || defaultTheme.desktop_up)`
    width: auto;
  `};
`;

const Content = styled.div`
  height: 100vh;
  ${p => (p.theme.desktop_up || defaultTheme.desktop_up)`
    height: auto;
    margin: 20px 0;
  `};
`;

/**
 * Modal component.
 */
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { nodeInserted: false, id: generateId() };
    this.previousBodyOverflow = null;
    this.node = document.createElement('div');
    this.node.setAttribute('data-ft-modal', this.state.id);
  }

  componentDidMount() {
    const { open } = this.props;
    document.body.appendChild(this.node);
    this.setState({ nodeInserted: true }, () => {
      if (open) {
        this.handleShow();
      }
    });
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
    document.body.removeChild(this.node);
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
    if (this.props.closeOnEscape && event.keyCode === 27) {
      this.props.onClose();
    }
  };

  handleBackdropClick = () => {
    if (this.props.closeOnBackdropClick) {
      this.props.onClose();
    }
  };

  handleModalClick = event => {
    event.stopPropagation();
  };

  handleRef = element => {
    this.modal = element;
  };

  render() {
    const { backdropColor, open, children, ...otherProps } = this.props;
    const { nodeInserted } = this.state;
    if (!open || !nodeInserted) {
      return null;
    }
    return ReactDOM.createPortal(
      <Backdrop
        backdropColor={backdropColor}
        onClick={this.handleBackdropClick}
        data-component-name="modal-backdrop"
      >
        <ModalWrapper
          {...otherProps}
          innerRef={this.handleRef}
          onClick={this.handleModalClick}
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
        >
          <Content>{children}</Content>
        </ModalWrapper>
      </Backdrop>,
      this.node
    );
  }
}

Modal.defaultProps = {
  preventGlobalScroll: true,
  closeOnBackdropClick: true,
  closeOnEscape: true,
};

Modal.propTypes = {
  backdropColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  preventGlobalScroll: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  closeOnBackdropClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

/** @component */
export default Modal;
