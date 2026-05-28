import Navbar from '../components/layout/Navbar';
import ClientsSection from '../components/sections/ClientsSection';
import HeroSection from '../components/sections/HeroSection';
// import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ClientsSection />
      </main>
    </>
  );
};

export default HomePage;
