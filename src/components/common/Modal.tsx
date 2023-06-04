import { PropsWithChildren } from 'react';
import ReactModal, { Styles } from 'react-modal';

type ModalTypes = {
  isOpen: boolean;
  closeModal: () => void;
};

ReactModal.setAppElement('#__next');

const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
    width: '90%',
    maxWidth: 512,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
  },
};

function Modal({
  isOpen,
  closeModal,
  children,
}: PropsWithChildren<ModalTypes>) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button
        className='absolute top-0 right-0 m-5 text-2xl font-bold leading-none cursor-pointer text-red-500'
        onClick={closeModal}
      >
        &#x2715;
      </button>
      {children}
    </ReactModal>
  );
}

export default Modal;
