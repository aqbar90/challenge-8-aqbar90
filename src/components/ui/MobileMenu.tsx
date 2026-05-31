import Button from './Button';
import { X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import type { MobileMenuProps } from '../../types';
import Logo from './Logo';

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className='
        fixed
        inset-0
        z-50
        bg-neutral-100
      '
    >
      <div className='flex flex-col px-xl py-3xl'>
        {/* Header */}

        <div className='flex items-center justify-between'>
          <Logo />

          <button type='button' onClick={onClose}>
            <X size={28} className='text-neutral-950' />
          </button>
        </div>

        {/* Menu */}

        <div className=' flex flex-col gap-3 top-16 left-4 mt-5'>
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className='
                text-sm
                font-primary
                font-semibold
                leading-sm
                lg:text-md
                lg:leading-md
              '
            >
              {item.label}
            </a>
          ))}

          <div>
            <Button size='md' className='w-110'>
              Let's Talk
            </Button>
          </div>
        </div>

        {/* CTA */}
      </div>
    </div>
  );
};

export default MobileMenu;
