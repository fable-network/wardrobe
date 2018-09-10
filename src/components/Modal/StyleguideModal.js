import React from 'react';
import styled from 'styled-components';
import Modal, { ModalStyles } from './Modal';

const ModalRoot = styled.div`
  ${ModalStyles};
`;

const StyleguideModal = props => (
  <ModalRoot size={props.size}>
    {props.children}
  </ModalRoot>
);

StyleguideModal.propTypes = {
  size: Modal.propTypes.size,
  children: Modal.propTypes.children,
};

StyleguideModal.defaultProps = {
  size: Modal.defaultProps.size,
};

export default StyleguideModal;
