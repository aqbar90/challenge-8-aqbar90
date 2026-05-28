import Container from '../layout/Container';
import Button from '../ui/Button';
import heroImage from '../../assets/Image/heroImage.jpg';
import { heroData } from '../../data/Hero';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='
    flex
    flex-col
    items-start
    gap-10
    pt-12
    pb-16
    md:pt-16
    md:pb-20
    lg:pt-20
    lg:pb-24
    w-full
    max-w-90.25
    md:max-w-105
    lg:max-w-163.25
  '
    >
      <Container>
        <div
          className='
            flex
            flex-col
            gap-2
            lg:grid
            lg:grid-cols-2
            lg:items-center
            lg:gap-12
          '
        >
          {/* Content */}

          <div
            className='
          w-full
          max-w-130
          '
          >
            <h1
              className='
                text-display-lg
                font-primary
                font-bold
                leading-display-lg
                tracking-display
                md:text-display-2xl
                lg:text-display-3xl
              '
            >
              {heroData.titleLine1}

              <span
                className='
                  block
                  text-primary
                '
              >
                {heroData.titleHighlight}
              </span>
            </h1>

            <p
              className='
                mt-6
                text-md
                font-semibold
                font-primary
                tracking-normal
                leading-md
                lg:text-xl
                lg:leading:xl
              '
            >
              {heroData.description}
            </p>

            <div className='mt-8'>
              <Button
                className='
                  w-full
                  md:w-auto
                  md:min-w-45
                  h-11
                  p-2
                  gap-1
                  rounded-full
                '
              >
                {heroData.ctaLabel}
              </Button>
              <div
                className='
                flex
                justify-center
              mt-16
              md:mt-20
              lg:mt-0
              lg:flex-1
              lg:justify-end'
              >
                <img
                  src={heroImage}
                  alt='Hero Image'
                  className='
                  w-full
                  max-w-105
                  md:max-w-130
                  lg:max-w-160

                   '
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
