import { useState } from 'react';
import Container from '../layout/Container';
import FAQItem from '../ui/FAQItem';
import ConsultationCard from '../ui/ConsultationCard';
import { faqData } from '../../data/faqs';

const FAQSection = () => {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section
      id='faq'
      className='
        py-10
        px-4
        lg:py-20
        lg:px-30
        gap-6
      '
    >
      <Container>
        {/* Header */}

        <div
          className='
            flex
            flex-col
            gap-4
            lg:flex-row
            lg:items-start
            lg:justify-between
          '
        >
          <h2
            className='
              max-w-80
              text-display-sm
              font-primary
              font-bold
              tracking-display
              leading-display-sm
              lg:text-display-xl
              lg:leading-display-xl
            '
          >
            Need Help? Start Here.
          </h2>

          <p
            className='
              max-w-55
              text-sm
              font-primary
              font-medium
              leading-sm
              text-neutral-400
              md:text-md
              md:leading-md
              lg:text-right
              lg:text-lg
              lg:leading-lg
            '
          >
            Everything you need to know — all in one place.
          </p>
        </div>

        {/* Divider */}

        <div
          className='
            mt-4
            border-t
            border-neutral-200
          '
        />

        {/* Content */}

        <div
          className='
            grid
            grid-cols-1
            gap-4
            lg:grid-cols-[1fr_320px]
            lg:gap-4
          '
        >
          {/* FAQ */}

          <div>
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? 0 : faq.id)}
              />
            ))}
          </div>

          {/* CTA */}

          <div>
            <ConsultationCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
