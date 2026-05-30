import Container from '../layout/Container';
import ProcessCard from '../ui/ProcessCard';

import { processData } from '../../data/process';

const ProcessSection = () => {
  return (
    <section
      id='process'
      className='
        py-10
        px-4
        md:py-15
        lg:py-20
        lg:px-11xl
      '
    >
      <Container>
        {/* Section Heading */}

        <div
          className='
            mx-auto
            max-w-360
            text-center
            gap-2.75
          '
        >
          <h2
            className='
              text-display-sm
              font-primary
              font-bold
              tracking-display
              leading-display-sm
              md:text-display-md
              md:leading-display-md
              lg:text-display-xl
              lg:leading-display-xl
            '
          >
            Our Process
          </h2>

          <p
            className='
              text-sm
              font-medium
              font-primary
              leading-7
              text-neutral-500
              md:text-md
              md:leading-md
              lg:text-lg
              lg:leading-lg
            '
          >
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* ==============================
            MOBILE TIMELINE
        ============================== */}

        <div
          className='
            relative
            mt-14
            flex
            flex-col
            gap-4
            lg:hidden
          '
        >
          {processData.map((item, index) => (
            <div
              key={item.id}
              className='
                flex
                items-start
                gap-3
              '
            >
              {/* Timeline Column */}

              <div
                className='
                flex
                flex-col
                items-center
              '
              >
                {/* Circle */}

                <div
                  className='
                  relative
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  text-white
                  text-sm
                  font-bold
                  shadow-sm
                '
                >
                  {item.id}
                </div>

                {/* Line */}

                {index !== processData.length - 1 && (
                  <div
                    className='absolute
                    h-11xl
                    w-px
                    bg-neutral-300
                  '
                  />
                )}
              </div>

              {/* Card */}

              <div className='flex-1'>
                <ProcessCard
                  title={item.title}
                  description={item.description}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ==============================
            DESKTOP TIMELINE
        ============================== */}

        <div
          className='relative
          hidden
          lg:block
          mt-10
          '
        >
          <div className='space-y-8'>
            {processData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className='
                  grid
                  grid-cols-[1fr_48px_1fr]
                  items-center
                  gap-8
                '
                >
                  {/* Left Card */}

                  <div className='flex justify-end'>
                    {isLeft && (
                      <div className='w-full max-w-360'>
                        <ProcessCard
                          title={item.title}
                          description={item.description}
                        />
                      </div>
                    )}
                  </div>

                  {/* Timeline */}

                  <div
                    className='
                    flex
                    flex-col
                    items-center
                  '
                  >
                    {/* Circle */}

                    <div
                      className='
                      relative
                      z-20
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      text-white
                      text-sm
                      font-bold
                      shadow-sm
                    '
                    >
                      {item.id}
                    </div>

                    {/* Line */}

                    {index !== processData.length - 1 && (
                      <div
                        className='absolute
                        h-40
                        w-px
                        bg-neutral-300
                      '
                      />
                    )}
                  </div>

                  {/* Right Card */}

                  <div className='flex justify-start'>
                    {!isLeft && (
                      <div className='w-full max-w-360'>
                        <ProcessCard
                          title={item.title}
                          description={item.description}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
