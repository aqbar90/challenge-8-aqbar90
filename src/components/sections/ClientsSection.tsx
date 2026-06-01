import Container from '../layout/Container';
import { clientsData } from '../../data/clients';

const ClientsSection = () => {
  return (
    <section
      id='clients'
      className='
      px-4
      py-10
      gap-6
      transition-colors
      duration-300
      dark:bg-black
      lg:py-20
      lg:px-11xl
    '
    >
      <Container>
        <div
          className='
            flex
            flex-col
            items-center
          '
        >
          {/* Title */}

          <h2
            className='
              text-center
              text-md
              font-bold
              font-primary
              leading-md
              tracking-display
              text-black
              dark:text-white
              transition-colors
              duration-300
              lg:text-display-xs
              lg:leading-display-xs
            '
          >
            Trusted by Global Innovators & Leading Brands
          </h2>

          {/* Logos Marquee*/}

          <div
            className='
            relative
            mt-10
            w-full
            overflow-hidden
            '
          >
            {/* Left Fade */}
            <div
              className='
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-16
              bg-linear-to-r
              from-white
              dark:from-black
              to-transparent
              '
            />

            {/* Right Fade */}
            <div
              className='
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-16
              bg-linear-to-l
             from-white
             dark:from-black
              to-transparent
    '
            />
            <div
              className='
              h-28.5
              animate-marquee
              flex
              w-max
              items-center
              pt-10
              pb-10
              gap-12
             '
            >
              {[...clientsData, ...clientsData].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className='
                  group
                  flex
                  shrink-0
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:scale-105
                 '
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading='lazy'
                    decoding='async'
                    className='
                    h-8.5
                    w-auto
                    object-contain
                    opacity-40
                    dark:opacity-60
                    grayscale
                    dark:brightness-125
                    transition-all
                    duration-300
                    ease-out
                    group-hover:opacity-100
                    group-hover:grayscale-0
                    '
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientsSection;
