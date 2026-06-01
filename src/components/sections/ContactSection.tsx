import { useState } from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import ContactInput from '../ui/ContactInput';
import ContactTextarea from '../ui/ContactTextarea';
import ServiceCheckbox from '../ui/ServiceCheckbox';
import { contactServices } from '../../data/contactService';
import SuccessModal from '../ui/SuccessModal';
import ErrorModal from '../ui/ErrorModal';

const ContactSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Web Development',
  ]);

  const [loading, setLoading] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false);

  const [errorOpen, setErrorOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessOpen(false);
    setErrorOpen(false);

    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== '');

    if (hasError) return;

    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const success = Math.random() > 0.5;

      if (!success) {
        throw new Error('Failed');
      }

      setSuccessOpen(true);

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);

      setErrorOpen(true);
    } finally {
      setLoading(false);
    }
  };

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
              dark:text-neutral-500
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
          onSubmit={handleSubmit}
          className='
            mx-auto
            mt-10
            max-w-190
          '
        >
          <ContactInput
            label='Name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors.name && (
            <p className='mt-1 text-sm text-red-500'>{errors.name}</p>
          )}

          <div className='mt-6'>
            <ContactInput
              label='Email'
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
            )}
          </div>

          <div className='mt-6'>
            <ContactTextarea
              label='Message'
              placeholder='Enter your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {errors.message && (
              <p className='mt-1 text-sm text-red-500'>{errors.message}</p>
            )}
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
              type='submit'
              disabled={loading}
              size='md'
              className='
                w-full
                md:w-190
              '
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </form>
        <SuccessModal
          open={successOpen}
          onClose={() => setSuccessOpen(false)}
        />

        <ErrorModal
          open={errorOpen}
          onRetry={() => {
            setErrorOpen(false);
          }}
        />
      </Container>
    </section>
  );
};

export default ContactSection;
