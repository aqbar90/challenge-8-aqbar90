import Button from './Button';
import ModalOverlay from './ModalOverlay';
import successIcon from '../../assets/icons/Message/mail-success.svg';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal = ({ open, onClose }: SuccessModalProps) => {
  if (!open) return null;

  return (
    <ModalOverlay>
      <div
        className='
          w-full
          max-w-87.5
          rounded-2xl
          bg-white
          dark:bg-black
          shadow-xl
          overflow-hidden
        '
      >
        <div className='p-6 text-center'>
          <img
            src={successIcon}
            alt='success'
            className='
              mx-auto
              h-24
              w-auto
            '
          />

          <h3
            className='
              mt-4
              text-lg
              font-bold
              text-black
              dark:text-white
            '
          >
            Message Received!
          </h3>

          <p
            className='
              mt-2
              text-sm
              text-neutral-500
              dark:text-neutral-400
            '
          >
            Thanks for reaching out — we'll get back to you as soon as possible.
          </p>
        </div>

        <div
          className='
            border-t
            border-neutral-200
            dark:border-neutral-800
            p-5
          '
        >
          <Button className='w-full' onClick={onClose}>
            Back to Home
          </Button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default SuccessModal;
