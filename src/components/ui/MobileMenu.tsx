import Button from './Button';

import { navigationItems } from '../../data/navigation';
import type { MobileMenuProps } from '../../types';

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className='
        fixed
        inset-0
        z-50
        bg-white
      '
    >
      <div className='flex h-full flex-col p-8'>
        <div className='mt-10 flex flex-col gap-12'>
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className='
                text-[24px]
                font-medium
              '
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className='mt-auto'>
          <Button>Let’s Talk</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
