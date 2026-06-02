import { useState } from 'react';
import Container from '../layout/Container';
import IndustryMenu from '../ui/IndustryMenu';
import { industriesData } from '../../data/industries';

const IndustrySection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const currentIndustry = industriesData[activeIndustry];

  return (
    <section
      id='industry'
      className='
        gap-6
        py-10
        px-4
        transition-colors
        duration-300
        dark:bg-black
        lg:py-20
        lg:px-11xl
        lg:gap-16
      '
    >
      <Container>
        {/* Heading */}

        <div>
          <h2
            className='
              text-display-md
              font-primary
              font-bold
              tracking-display
              leading-display-md
              text-black
              dark:text-white
              transition-colors
              duration-300
              lg:text-display-xl
              lg:leading-display-xl
            '
          >
            Built for Your Industry
          </h2>

          <p
            className='
              mt-2
              text-sm
              font-primary
              font-medium
              leading-sm
              lg:text-lg
              lg:leading-lg
              text-neutral-500
              dark:text-neutral-400
              transition-colors
              duration-300
            '
          >
            We’ve helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>

        {/* Content */}

        <div
          className='
            mt-6
            flex
            flex-col
            gap-6
            lg:grid
            lg:grid-cols-[160px_1fr]
            lg:gap-16
          '
        >
          {/* Sidebar */}

          <div>
            {industriesData.map((industry, index) => (
              <IndustryMenu
                key={industry.id}
                title={industry.title}
                active={activeIndustry === index}
                onClick={() => setActiveIndustry(index)}
              />
            ))}
          </div>

          {/* Content */}

          <div>
            <p
              className='
                text-sm
                font-primary
                font-medium
                leading-sm
                text-neutral-700
                dark:text-neutral-300
                transition-colors
                duration-300
                md:text-md
                md:leading-md
                lg:text-lg
                lg:leading-lg
              '
            >
              {currentIndustry.description}
            </p>

            <div
              className='
                mt-4
                overflow-hidden
                rounded-xl
              '
            >
              <img
                src={currentIndustry.image}
                alt={currentIndustry.title}
                loading='lazy'
                decoding='async'
                className='
                  h-auto
                  w-full
                  object-cover
                  transition-all
                  duration-500
                  dark:brightness-75
                '
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IndustrySection;
