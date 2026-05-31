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
      <header>
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

            <div>
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
              <nav
                className='
                relative
                grid
                grid-cols-[180px_1fr_180px]
                h-18
                items-center
                justify-between
              '
              >
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
              </nav>
            </div>
            <div className='ml-auto hidden lg:block'>
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
