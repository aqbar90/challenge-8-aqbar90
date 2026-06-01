import Button from './Button';
import ModalOverlay from './ModalOverlay';
import errorIcon from '../../assets/icons/Message/mail-failed.svg';

interface ErrorModalProps {
  open: boolean;
  onRetry: () => void;
}

const ErrorModal = ({ open, onRetry }: ErrorModalProps) => {
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
            src={errorIcon}
            alt='error'
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
            Oops! Something went wrong.
          </h3>

          <p
            className='
              mt-2
              text-sm
              text-neutral-500
              dark:text-neutral-400
            '
          >
            We couldn't send your message. Please try again or check your
            connection.
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
          <Button className='w-full' onClick={onRetry}>
            Try Again
          </Button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default ErrorModal;
