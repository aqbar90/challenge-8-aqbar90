import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className='border-b border-neutral-200'>
      <button
        onClick={onToggle}
        className='
          flex
          w-full
          items-center
          justify-between
          py-6
          pr-6
          text-left
        '
      >
        <span
          className='
            text-lg
            font-primary
            font-bold
            leading-lg
            lg:text-display-xs
            lg:leading-display-xs
          '
        >
          {question}
        </span>

        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}
        `}
      >
        <p
          className='
            max-w-180
            text-sm
            font-primary
            font-medium
            leading-sm
            lg:text-xl
            lg:leading-xl
            text-neutral-400
          '
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
