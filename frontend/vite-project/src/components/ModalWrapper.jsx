import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalWrapper = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;