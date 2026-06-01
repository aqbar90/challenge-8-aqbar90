import Container from '../layout/Container';
import { statsData } from '../../data/stats';

const StatsSection = () => {
  return (
    <section
      id='stats'
      className='
        px-4
        py-10
        transition-colors
        duration-300
        dark:bg-black
        md:py-24
        lg:py-20
        lg:px-11xl
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
              text-black
              dark:text-white
              transition-colors
              duration-300
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
              dark:text-neutral-400
              transition-colors
              duration-300
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
                dark:border-neutral-800
                bg-neutral-50
                dark:bg-neutral-950
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-primary
                hover:shadow-lg
                dark:hover:shadow-black/30
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
                  dark:text-neutral-300
                  transition-colors
                  duration-300
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
