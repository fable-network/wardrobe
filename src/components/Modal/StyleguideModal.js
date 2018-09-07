import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ModalStyles } from './Modal';

const Modal = styled.div`
  ${ModalStyles};
`;

const StyleguideModal = props => <Modal size={props.size}>{props.children}</Modal>;

StyleguideModal.propTypes = {
  size: PropTypes.oneOf(['auto', 'small', 'normal', 'large']),
  children: PropTypes.node.isRequired,
};

export default StyleguideModal;
