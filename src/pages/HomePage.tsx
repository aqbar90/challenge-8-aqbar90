import Navbar from '../components/layout/Navbar';
import ClientsSection from '../components/sections/ClientsSection';
import HeroSection from '../components/sections/HeroSection';
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
      </main>
    </>
  );
};

export default HomePage;
