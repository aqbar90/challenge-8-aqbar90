import Container from '../layout/Container';
import Button from '../ui/Button';
import heroImage from '../../assets/Image/heroImage.jpg';
import { heroData } from '../../data/Hero';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='
      mt-10
      relative
      overflow-hidden
      px-4
      py-10
      lg:px-11xl
      lg:py-57.5
  '
    >
      <Container>
        <div
          className='
            relative
            py-45
            flex
            flex-col
            gap-2
            items-center
            
            
          '
        >
          {/* Content */}

          <div
            className='
            top-24
            
            lg:text-left
            lg:absolute
            lg:z-20
            lg:left-0
            lg:-translate-y-1/2
          '
          >
            <h1
              className='
                text-display-lg
                font-primary
                font-bold
                leading-display-lg
                tracking-display
                lg:text-display-2xl
                lg:leading-display-2xl
                lg:-mr-24
                lg:relative
                lg:z-20
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
                lg:text-lg
                lg:leading-lg
              '
            >
              {heroData.description}
            </p>

            <div className='mt-8'>
              <Button
                size='md'
                className='
                  min-w-110
                  h-11
                  p-2
                  gap-1
                  md:min-w-145
                  lg:min-w-45
                '
              >
                {heroData.ctaLabel}
              </Button>
            </div>
          </div>
          <div
            className='
              flex
              justify-center
              mt-16
              lg:justify-end
              lg:-translate-y-60
              lg:absolute
              lg:top-[-80px]
              lg:-right-37.5
              lg:z-10
              '
          >
            <img
              src={heroImage}
              alt='Hero Image'
              className='
                  w-full
                  max-w-105
                  md:max-w-130
                  lg:max-w-200
                  lg:object-contain
                  lg:relative
                  lg:z-10
                   '
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
