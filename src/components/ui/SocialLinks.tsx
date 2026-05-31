import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

import { socialLinks } from '../../data/socialLinks';

const icons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  TikTok: FaTiktok,
};

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  return (
    <div
      className={`
        flex
        items-center
        gap-4

        ${className}
      `}
    >
      {socialLinks.map((social) => {
        const Icon = icons[social.name as keyof typeof icons];

        return (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            target='_blank'
            rel='noreferrer'
            className='
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-neutral-100
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-primary
            '
          >
            <Icon
              size={18}
              className='
                transition-colors
                duration-300
                group-hover:text-primary
              '
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
