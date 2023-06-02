import { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

type ModalTypes = {
  isOpen: boolean;
  closeModal: () => void;
};

ReactModal.setAppElement('#__next');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '200px',
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
        className='absolute top-0 right-0 m-5 text-9xl font-bold leading-none cursor-pointer'
        onClick={closeModal}
      >
        &#x2715;
      </button>
      {children}
    </ReactModal>
  );
}

export default Modal;
