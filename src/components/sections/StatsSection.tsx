import Container from '../layout/Container';

import { statsData } from '../../data/stats';

const StatsSection = () => {
  return (
    <section
      id='stats'
      className='
        px-4
        py-20
        md:py-24
        lg:py-28
        gap-6
      '
    >
      <Container>
        {/* Section Heading */}

        <div
          className='
            gap-2.75
            mx-auto
            max-w-180
            text-center
          '
        >
          <h2
            className='
              text-display-sm
              font-bold
              font-primary
              tracking-display
              leading-9.5
              md:text-display-md
              lg:text-display-xl
            '
          >
            End-to-End IT Solutions That Drive Results
          </h2>

          <p
            className='
              text-sm
              font-primary
              font-medium
              leading-7
              text-neutral-500
              md:text-md
            '
          >
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>

        {/* Stats Grid */}

        <div
          className='
            mt-4
            grid
            grid-cols-2
            gap-4
            md:grid-cols-4
            md:gap-8
          '
        >
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className='
                p-4
                gap-1.5
                flex
                aspect-square
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-neutral-200
                bg-white
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-primary
                hover:shadow-lg
              '
            >
              <span
                className='
                  text-display-lg
                  font-primary
                  font-bold
                  leading-11
                  tracking-display
                  text-primary
                  md:text-display-xl
                '
              >
                {stat.value}
              </span>

              <p
                className='
                  text-center
                  text-sm
                  font-primary
                  font-semibold
                  leading-7
                  text-neutral-600
                  md:text-md
                '
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
