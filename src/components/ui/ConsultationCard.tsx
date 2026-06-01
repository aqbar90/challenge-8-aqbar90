import consultationImage from '../../assets/Image/ConsultationImage.jpg';

const ConsultationCard = () => {
  return (
    <div
      className='
        rounded-2xl
        bg-primary-300
        p-5
        gap-4
      '
    >
      <h3
        className='
          text-display-sm
          font-primary
          font-bold
          tracking-display
          leading-display-sm
          md:text-display-md
          md:leading-display-md
          lg:text-display-lg
          lg:leading-display-lg
          text-white
        '
      >
        Let’s talk it through
      </h3>

      <p
        className='
          text-sm
          font-primary
          font-semibold
          leading-sm
          md:text-md
          md:leading-md
          lg:text-lg
          lg:leading-lg
          text-white
        '
      >
        book a free consultation with our team.
      </p>

      <img
        src={consultationImage}
        alt='Consultation'
        loading='lazy'
        decoding='async'
        className='
          mt-2
          h-auto
          w-full
          rounded-2xl
          object-cover
        '
      />
      <div className='relative'>
        <div
          className='
          absolute
          left-6
          right-6
          top-0
          h-4
          rounded-full
        '
        />
        <button
          className='
          group
          relative
          overflow-hidden
          mt-4
          w-full
          rounded-full
          bg-black
          dark:bg-white
          p-2
          text-md
          font-primary
          font-bold
          tracking-display
          leading-md
          border
          border-neutral-700
          dark:border-neutral-200
          text-white
          dark:text-black
          transition-all
          duration-500
          hover:scale-102
        '
        >
          {/* Inner Highlight */}
          <span
            className='
            absolute
            left-px
            right-px
            top-0
            h-1
            rounded-full
            bg-white/30
            blur-xs
            transition-all
            duration-500
            group-hover:translate-x-100
          '
          />
          <span className='relative z-30'>Free Consultation</span>
        </button>
      </div>
    </div>
  );
};

export default ConsultationCard;
