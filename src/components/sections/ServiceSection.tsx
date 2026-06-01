import Container from '../layout/Container';
import ServiceCard from '../ui/ServiceCard';
import { servicesData } from '../../data/service';

const ServicesSection = () => {
  return (
    <section
      id='services'
      className='
        py-10
        px-4
        transition-colors
        duration-300
        dark:bg-black
        lg:py-20
        lg:px-11xl
        gap-10
      '
    >
      <Container>
        {/* Heading */}

        <div
          className='
            mx-auto
            max-w-160
            text-center
            gap-2.75
          '
        >
          <h2
            className='
              text-display-sm
              font-primary
              font-semibold
              tracking-normal
              leading-9.5
              text-black
              dark:text-white
              transition-colors
              duration-300
              lg:text-display-xl
              lg:font-bold
              lg:leading-14
              lg:tracking-display

            '
          >
            Smart IT Solutions That Grow With You
          </h2>

          <p
            className='
              mt-4
              text-sm
              font-medium
              font-primary
              tracking-normal
              leading-7
              text-neutral-500
              dark:text-neutral-400
              transition-colors
              duration-300
              lg:text-lg
              lg:leading-8
            '
          >
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* Services Grid */}

        <div
          className='
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
            lg:pt-16
          '
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
