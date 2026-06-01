import { useState } from 'react';

import Container from '../layout/Container';
import Button from '../ui/Button';

import ContactInput from '../ui/ContactInput';
import ContactTextarea from '../ui/ContactTextarea';
import ServiceCheckbox from '../ui/ServiceCheckbox';

import { contactServices } from '../../data/contactService';

const ContactSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Web Development',
  ]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  return (
    <section
      id='contact'
      className='
        py-10
        px-4
        transition-colors
        duration-300
        dark:bg-black
        lg:py-20
        lg:px-11xl
        gap-16
      '
    >
      <Container>
        {/* Header */}

        <div className='text-center gap-xl'>
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
            Ready to Start? Let&apos;s Talk.
          </h2>

          <p
            className='
              mt-2
              text-sm
              font-primary
              font-medium
              leading-sm
              text-neutral-400
              dark-text-neutral-500
              transition-colors
              duration-300
              lg:text-lg
              lg:leading-lg

            '
          >
            Tell us what you need, and we&apos;ll get back to you soon.
          </p>
        </div>

        {/* Form */}

        <form
          className='
            mx-auto
            mt-10
            max-w-190
          '
        >
          <ContactInput label='Name' placeholder='Enter your name' />

          <div className='mt-6'>
            <ContactInput
              label='Email'
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='mt-6'>
            <ContactTextarea label='Message' placeholder='Enter your message' />
          </div>

          {/* Services */}

          <div className='mt-8'>
            <h3
              className='
                mb-5
                text-sm
                font-bold
                leading-sm
                text-black
                dark:text-white
                transition-colors
                duration-300

              '
            >
              Services
            </h3>

            <div
              className='
                grid
                grid-cols-1
                gap-3.5
                md:grid-cols-2
              '
            >
              {contactServices.map((service) => (
                <ServiceCheckbox
                  key={service}
                  label={service}
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                />
              ))}
            </div>
          </div>

          {/* Submit */}

          <div
            className='
              mt-10
              flex
              justify-center
            '
          >
            <Button
              size='md'
              className='
                w-full
                md:w-190
              '
            >
              Send
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default ContactSection;
