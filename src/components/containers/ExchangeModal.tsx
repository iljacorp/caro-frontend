import { useState } from 'react';
import Modal from '../common/Modal';

type ExchangeModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

function ExchangeModal({ isOpen, closeModal }: ExchangeModalProps) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2>Exchange</h2>
    </Modal>
  );
}

export default ExchangeModal;
