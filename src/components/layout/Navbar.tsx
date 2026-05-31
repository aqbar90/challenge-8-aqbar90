import { useState } from 'react';
import { navigationItems } from '../../data/navigation';
import Container from './Container';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import HamburgerButton from '../ui/HamburgerButton';
import MobileMenu from '../ui/MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header
        className='
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/30
        backdrop-blur-lg
      '
      >
        <Container>
          <div
            className='
              py-3xl
              px-xl
              lg:px-11xl
              flex
              h-4
              items-center
              justify-between
            '
          >
            {/* Logo */}

            <div className='shrink-0'>
              <Logo />
            </div>

            {/* Desktop Navigation */}

            <div
              className='
              flex
              mx-auto
              px-5
              lg:px-8
            '
            >
              <nav className='flex h-18 items-center justify-between lg:hidden'>
                {/* Mobile Navbar */}
              </nav>

              <nav className='hidden h-6 lg:grid lg:grid-cols-[180px_1fr_180px] lg:items-center'>
                {/* Desktop Navbar */}
              </nav>

              <ul
                className='
                  absolute
                  hidden
                  lg:flex
                  items-center
                  gap-10
                '
              >
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='
                        text-md
                        font-semibold
                        text-neutral-900
                        transition-colors
                        duration-300
                        hover:text-primary
                      '
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='ml-auto shrink-0 hidden lg:block'>
              <Button
                className='
                  w-49.25
                  h-11
                '
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Humburger */}

            <HamburgerButton isOpen={isOpen} onToggle={toggleMenu} />
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
