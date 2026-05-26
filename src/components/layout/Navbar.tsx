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
          sticky
          border-b
          border-neutral-200
        '
      >
        <Container>
          <div
            className='
              flex
              h-16
              items-center
              justify-between
              
            '
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}

            <div
              className='
              hidden
              md:flex
              items-center
              gap-3
            '
            >
              <nav
                className='
                flex
                
                items-center
                gap-1.5
              '
              >
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
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
                ))}
              </nav>
              <div>
                <Button
                  className='
                  w-49.25
                  h-11
                '
                >
                  Let's Talk
                </Button>
              </div>
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
