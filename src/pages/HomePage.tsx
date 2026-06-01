import { lazy, Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import ClientsSection from '../components/sections/ClientsSection';
import StatsSection from '../components/sections/StatsSection';
import ProcessSection from '../components/sections/ProcessSection';
import ServicesSection from '../components/sections/ServiceSection';

import SEO from '../components/seo/SEO';

// Lazy Sections

const IndustrySection = lazy(
  () => import('../components/sections/IndustrySection')
);

const PortfolioSection = lazy(
  () => import('../components/sections/PortfolioSection')
);

const TestimonialsSection = lazy(
  () => import('../components/sections/TestimonialsSection')
);

const FAQSection = lazy(() => import('../components/sections/FAQSection'));

const ContactSection = lazy(
  () => import('../components/sections/ContactSection')
);

const FooterSection = lazy(
  () => import('../components/sections/FooterSection')
);
// import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <SEO
        title='Your Company | Web & Mobile Development'
        description='Professional web development, mobile app development, UI/UX design and cloud solutions.'
      />
      <Navbar />

      <main>
        <HeroSection />
        <ClientsSection />
        <StatsSection />
        <ProcessSection />
        <ServicesSection />

        <Suspense fallback={null}>
          <IndustrySection />
          <PortfolioSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
          <FooterSection />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
