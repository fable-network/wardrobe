import React from 'react';
import styled from 'styled-components';
import Modal, { ModalStyles } from './Modal';

const ModalRoot = styled.div`
  ${ModalStyles};
`;

const StyleguideModal = props => (
  <ModalRoot size={props.size} appearance={props.appearance}>
    {props.children}
  </ModalRoot>
);

StyleguideModal.propTypes = {
  size: Modal.propTypes.size,
  appearance: Modal.propTypes.appearance,
  children: Modal.propTypes.children,
};

StyleguideModal.defaultProps = {
  size: Modal.defaultProps.size,
  appearance: Modal.defaultProps.appearance,
};

export default StyleguideModal;
