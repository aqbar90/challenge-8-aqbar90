import Navbar from '../components/layout/Navbar';
import ClientsSection from '../components/sections/ClientsSection';
import ContactSection from '../components/sections/ContactSection';
import FAQSection from '../components/sections/FAQSection';
import FooterSection from '../components/sections/FooterSection';
import HeroSection from '../components/sections/HeroSection';
import IndustrySection from '../components/sections/IndustrySection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ProcessSection from '../components/sections/ProcessSection';
import ServicesSection from '../components/sections/ServiceSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
// import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ClientsSection />
        <StatsSection />
        <ProcessSection />
        <ServicesSection />
        <IndustrySection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
};

export default HomePage;
