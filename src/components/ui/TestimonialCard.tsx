import { Star } from 'lucide-react';
import quoteIcon from '../../assets/icons/Quote.svg';

interface TestimonialCardProps {
  review: string;
  name: string;
  status: string;
  avatar?: string;
  active?: boolean;
}

const TestimonialCard = ({
  review,
  name,
  status,
  avatar,
  active = false,
}: TestimonialCardProps) => {
  return (
    <article
      className={`
        relative
        rounded-2xl
        border
        bg-neutral-50
        px-4
        pt-4
        pb-12
        lg:px-6
        lg:pt-6
        lg:pb-12
        text-center
        items-center
        transition-all
        duration-500

        ${
          active
            ? `
            border-neutral-300
            shadow-md
            opacity-100
          `
            : `
            border-neutral-200
            opacity-50
          `
        }
      `}
    >
      {/* Quote */}

      <div
        className='
        absolute
        -top-7
        left-5
        z-20
        px-1
      '
      >
        <img
          src={quoteIcon}
          alt='quote'
          className='
          h-12
          w-auto
        '
        />
      </div>

      {/* Stars */}

      <div
        className='
          flex
          justify-center
          gap-1
        '
      >
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={18} fill='#FBBF24' color='#FBBF24' />
        ))}
      </div>

      {/* Review */}

      <p
        className='
          mt-4
          text-sm
          font-primary
          font-semibold
          leading-sm
          lg:text-xl
          lg:leading-xl
        '
      >
        "{review}"
      </p>

      {/* User */}

      <div className='mt-4'>
        <h4
          className='
            text-sm
            font-primary
            font-semibold
            leading-sm
            lg:text-lg
            lg:leading-lg
          '
        >
          {name}
        </h4>

        <p
          className='
            text-sm
            font-primary
            font-semibold
            leading-sm
            lg:text-lg
            lg:leading-lg
            text-primary
          '
        >
          {status}
        </p>
      </div>

      {/* Avatar */}

      <img
        src={avatar}
        alt={name}
        className='
          absolute
          left-1/2
          bottom-[-32px]
          h-16
          w-16
          -translate-x-1/2
          rounded-full
          border-white
          object-cover
        '
      />
    </article>
  );
};

export default TestimonialCard;
