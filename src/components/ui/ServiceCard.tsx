interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <article
      className='
        mt-5
        relative
        rounded-2xl
        border
        border-[#DEDCDC]
        bg-neutral-50
        pt-12
        pb-5
        pr-5
        pl-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary
        hover:shadow-md
      '
    >
      {/* Floating Icon */}

      <div
        className='
          absolute
          -top-5
          left-6
          flex
          items-center
          justify-center
          h-16
          w-16
          z-20
          
        '
      >
        <img
          src={icon}
          alt={title}
          className='
            block
            h-full
            w-full
            object-contain
          '
        />
      </div>

      {/* Content */}

      <h3
        className='
          text-md
          font-bold
          font-primary
          tracking-display
          leading-md
          md:text-lg
          md:leading-lg
          lg:text-xl
          lg:leading-xl
          text-neutral-900
        '
      >
        {title}
      </h3>
      <p
        className='
          text-sm
          font-medium
          font-primary
          leading-sm
          lg:text-md
          lg:leading-md
          text-neutral-500
        '
      >
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;
