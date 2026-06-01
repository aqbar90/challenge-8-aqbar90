import { useEffect, useState } from 'react';
import Container from '../layout/Container';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonialsData } from '../../data/testimonials';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prev =
    testimonialsData[
      (activeIndex - 1 + testimonialsData.length) % testimonialsData.length
    ];

  const current = testimonialsData[activeIndex];

  const next = testimonialsData[(activeIndex + 1) % testimonialsData.length];

  return (
    <section
      id='testimonials'
      className='
        overflow-hidden
        py-10
        px-4
        transition-colors
        duration-300
        dark:bg-black
        lg:py-20
        lg:gap-20
      '
    >
      <Container>
        {/* Heading */}

        <div
          className='
            gap-16
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
              text-black
              dark:text-white
              transition-colors
              duration-300
              lg:text-display-xl
              lg:leading-display-xl
            '
          >
            What Partners Say About Working With Us
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
              text-neutral-400
              dark:text-neutral-500
              transition-colors
              duration-300
            '
          >
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* Mobile */}

        <div className='mt-16 lg:hidden'>
          <div
            className='
            relative
            w-full
            max-w-300
            h-80
          '
          >
            <TestimonialCard
              review={testimonialsData[activeIndex].review}
              name={testimonialsData[activeIndex].name}
              status={testimonialsData[activeIndex].status}
              avatar={testimonialsData[activeIndex].avatar}
              active
            />
          </div>
        </div>

        {/* Desktop */}

        {/* Card Posisition */}

        <div
          className='
            hidden
            lg:flex
            items-center
            justify-center
            mt-16
          '
        >
          <div
            className='
            relative
            w-full
            max-w-300
            h-95
          '
          >
            {/* Prev Card */}

            <div
              className='
            absolute
            -left-62.5
            top-0
            w-120
            opacity-20
            dark:opacity-30
            scale-90
            z-0
            origin-top
          '
            >
              <TestimonialCard
                review={prev.review}
                name={prev.name}
                status={prev.status}
                avatar={prev.avatar}
              />
            </div>

            {/* Active Card */}

            <div
              className='
              absolute
              left-1/2
              top-0
              w-140
              -translate-x-1/2
              z-20
            '
            >
              <TestimonialCard
                review={current.review}
                name={current.name}
                status={current.status}
                avatar={current.avatar}
                active
              />
            </div>

            {/* Next Card */}

            <div
              className='
              absolute
              -right-62.5
              top-0
              w-120
              opacity-20
              dark:opacity-30
              scale-90
              z-0
              origin-top
            '
            >
              <TestimonialCard
                review={next.review}
                name={next.name}
                status={next.status}
                avatar={next.avatar}
              />
            </div>
          </div>
        </div>
        {/* Dots */}

        <div
          className='
            flex
            justify-center
            gap-2
          '
        >
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                  h-2.5
                  w-2.5
                  rounded-full
                  transition-all
                  duration-300

                  ${index === activeIndex ? 'bg-primary' : 'bg-neutral-300 dark:bg-neutral-700'}
                `}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
