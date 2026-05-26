import { useState } from 'react';

import Container from './Container';

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
          sticky
          top-0
          z-40
          bg-white
        '
      >
        <Container>
          <div
            className='
              flex
              h-20
              items-center
              justify-between
            '
          >
            <Logo />

            <HamburgerButton isOpen={isOpen} onToggle={toggleMenu} />
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
