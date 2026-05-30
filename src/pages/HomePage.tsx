import Navbar from '../components/layout/Navbar';
import ClientsSection from '../components/sections/ClientsSection';
import HeroSection from '../components/sections/HeroSection';
import ProcessSection from '../components/sections/ProcessSection';
import ServicesSection from '../components/sections/ServiceSection';
import StatsSection from '../components/sections/StatsSection';
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
      </main>
    </>
  );
};

export default HomePage;
