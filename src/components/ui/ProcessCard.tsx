import { ChevronUp } from 'lucide-react';

interface ProcessCardProps {
  title: string;
  description: string;
}

const ProcessCard = ({ title, description }: ProcessCardProps) => {
  return (
    <div
      className='
        rounded-2xl
        border
        p-4
        md:p-5
        lg:p-6
        border-[#DEDCDC]
        bg-neutral-50
        transition-all
        duration-300
        hover:border-primary
        hover:shadow-md
      '
    >
      <div
        className='
          flex
          items-start
          justify-between
        '
      >
        <div>
          <h3
            className='
              text-md
              font-primary
              font-bold
              tracking-display
              leading-md
              md:text-lg
              md:leading-lg
              lg:text-xl
              lg:leading-xl
            '
          >
            {title}
          </h3>
          <p
            className='
              text-sm
              font-primary
              font-medium
              leading-sm
              lg:text-md
              lg:leading-md
              text-neutral-500
            '
          >
            {description}
          </p>
        </div>
        <ChevronUp size={24} className='text-[#0A0D12]' />
      </div>
    </div>
  );
};

export default ProcessCard;
