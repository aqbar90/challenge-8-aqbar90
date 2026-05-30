interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
}

const PortfolioCard = ({ image, title, category }: PortfolioCardProps) => {
  return (
    <article
      className='
        group
        cursor-pointer
      '
    >
      {/* Image */}

      <div
        className='
          overflow-hidden
          rounded-2xl
        '
      >
        <img
          src={image}
          alt={title}
          className='
            w-full
            transition-transform
            duration-500
            group-hover:scale-103
          '
        />
      </div>

      {/* Content */}

      <div>
        <p
          className='
            text-sm
            font-primary
            font-medium
            leading-sm
            lg:text-md
            lg:leading-md
            text-primary-200
          '
        >
          {category}
        </p>

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
      </div>
    </article>
  );
};

export default PortfolioCard;
