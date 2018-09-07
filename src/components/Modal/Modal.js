import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import BaseModal from 'react-modal2';
import classnames from 'classnames';

// TODO: confirm with the design team
function getPadding(size) {
  switch (size) {
    case 'small':
      return '20px 30px';
    case 'large':
      return '50px 70px';
    case 'auto':
    case 'normal':
    default:
      return '30px 50px';
  }
}

function getWidth(size) {
  switch (size) {
    case 'small':
      return '300px';
    case 'large':
      return '900px';
    case 'auto':
      return 'auto';
    case 'normal':
    default:
      return '600px';
  }
}

const DESKTOP = 'screen and (min-width: 992px)';

export const ModalStyles = css`
  background-color: ${props => props.theme.white};
  border: solid 1px ${props => props.theme.white};
  box-shadow: 0 0 8px 0 rgba(120, 130, 139, 0.5);
  width: 100%;
  max-width: 100%;
  @media ${DESKTOP} {
    width: ${props => getWidth(props.size)};
  }

  > .modal-header {
    // TODO: Extract to theme?
    border-bottom: solid 1px #dedede;
    padding: ${props => getPadding(props.size)};
    &.modal-header--single-child {
      font-size: 1.25em;
      font-weight: bold;
      color: ${props => props.theme.skyBlue};
      text-align: center;
      @media ${DESKTOP} {
        font-size: ${props => (props.size === 'small' ? '1.25em' : '1.5em')};
      }
    }
  }

  > .modal-footer {
    border-top: solid 1px #dedede;
    padding: ${props => getPadding(props.size)};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    > * + * {
      margin-top: 20px;
    }

    ${props =>
    props.size !== 'small'
      && `
      @media ${DESKTOP} {
        flex-flow: row-reverse wrap;
        align-items: center;
        justify-content: space-between;
        > * + * {
          margin-top: 0;
        }
      }
    `};
  }

  > .modal-body {
    padding: ${props => getPadding(props.size)};
  }
`;

const Root = styled.section`
  .backdrop {
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
  .modal {
    z-index: 10000;
    position: absolute;
    max-height: 100vh;
    &:focus {
      outline: none;
    }
    @media ${DESKTOP} {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const ModalWrapper = styled.div`
  ${ModalStyles};
  height: 100vh;
  @media ${DESKTOP} {
    height: auto;
    margin: 20px 0;
  }
`;

const HeaderStyled = styled.header`
  outline: none;
`;

const PropTypesChildren = {
  children: PropTypes.node,
};

const Header = props => (
  <HeaderStyled
    className={classnames({
      'modal-header': true,
      'modal-header--single-child': typeof props.children === 'string',
    })}
    tabIndex={0}
  >
    {props.children}
  </HeaderStyled>
);
Header.propTypes = PropTypesChildren;

const Footer = props => <footer className="modal-footer">{props.children}</footer>;
Footer.propTypes = PropTypesChildren;

const Body = props => <div className="modal-body">{props.children}</div>;
Body.propTypes = PropTypesChildren;

/**
 * Main modal component.
 */
class Modal extends Component {
  prevBodyOverflow = null;

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
    this.prevBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  unblockGlobalScroll() {
    document.body.style.overflow = this.prevBodyOverflow;
    this.prevBodyOverflow = null;
  }

  render() {
    const { backdropColor, open, size, children, onClose } = this.props;
    return open ? (
      <Root backdropColor={backdropColor} size={size} role="dialog">
        <BaseModal
          onClose={onClose}
          closeOnEsc
          closeOnBackdropClick
          backdropClassName="backdrop"
          modalClassName="modal"
        >
          <ModalWrapper size={size}>{children}</ModalWrapper>
        </BaseModal>
      </Root>
    ) : null;
  }
}

Modal.defaultProps = {
  preventGlobalScroll: true,
  size: 'normal',
};

Modal.propTypes = {
  backdropColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  preventGlobalScroll: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['auto', 'small', 'normal', 'large']),
  onClose: PropTypes.func,
};

Modal.Header = Header;
Modal.Footer = Footer;
Modal.Body = Body;

/** @component */
export default Modal;

// Screen-readers support opt-out. See https://github.com/cloudflare/react-modal2#accessibility
BaseModal.getApplicationElement = () => null;
