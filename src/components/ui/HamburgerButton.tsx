import { Menu, X } from 'lucide-react';

import type { HamburgerButtonProps } from '../../types';

const HamburgerButton = ({ isOpen, onToggle }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onToggle}
      aria-label='Toggle menu'
      className='
        flex
        items-center
        justify-center
        lg:hidden
      '
    >
      {isOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
  );
};

export default HamburgerButton;
