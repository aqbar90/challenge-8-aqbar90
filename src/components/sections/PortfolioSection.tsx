import Container from '../layout/Container';
import PortfolioCard from '../ui/PortfolioCard';
import { portfoliosData } from '../../data/portfolios';

const PortfolioSection = () => {
  return (
    <section
      id='portfolio'
      className='
        py-10
        px-4
        gap-6
        lg:py-20
        lg:px-11xl
        lg:gap-16
      '
    >
      <Container>
        {/* Heading */}

        <div
          className='
            gap-2.75
            mx-auto
            max-w-360
            text-center
          '
        >
          <h2
            className='
              text-display-sm
              font-primary
              font-bold
              tracking-display
              leading-display-sm
              lg:text-display-xl
              lg:leading-display-xl
            '
          >
            From Vision to Launch! Projects We’re Proud Of
          </h2>

          <p
            className='
              mt-4
              text-sm
              font-primary
              font-medium
              leading-sm
              md:text-md
              md:leading-md
              lg:text-lg
              lg:leading-lg
              text-neutral-400
            '
          >
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        {/* Portfolio Grid */}

        <div
          className='
            mt-5
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-3
            lg:gap-8
          '
        >
          {portfoliosData.map((portfolios) => (
            <PortfolioCard
              key={portfolios.id}
              image={portfolios.image}
              title={portfolios.title}
              category={portfolios.category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
