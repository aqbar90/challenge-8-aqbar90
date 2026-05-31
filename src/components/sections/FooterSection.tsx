import Logo from '../ui/Logo';
import { footerLinks } from '../../data/footerLinks';
import SocialLinks from '../ui/SocialLinks';

const FooterSection = () => {
  return (
    <footer
      className='
        px-4
        py-6
        lg:py-10
        lg:px-11xl
        gap-2
      '
    >
      <div
        className='
            rounded-4xl
            border
            border-neutral-50
            bg-neutral-100
            p-5
            gap-6
            lg:p-10
            lg:gap-15
          '
      >
        {/* TOP SECTION */}

        <div
          className='
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:items-start
              lg:justify-between
            '
        >
          {/* Mobile Logo */}

          <div className='lg:hidden'>
            <Logo />
          </div>

          {/* Heading */}

          <h2
            className='
                text-display-sm
                font-primary
                font-bold
                leading-display-sm
                tracking-display
                lg:text-2xl
                lg:max-w-50
              '
          >
            LET&apos;S DISCUSS YOUR IDEAS
          </h2>

          {/* Desktop Logo */}

          <div className='hidden lg:block'>
            <Logo />
          </div>
        </div>

        {/* Divider */}

        <div
          className='
              my-8
              border-t
              border-neutral-200
              lg:my-10
            '
        />

        {/* Bottom Section */}

        <div
          className='
              gap-4
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
            '
        >
          {/* Navigation */}

          <nav>
            <ul
              className='
                  flex
                  flex-col
                  gap-5
                  lg:flex-row
                  lg:gap-4
                '
            >
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='
                        px-2
                        gap-1.5
                        text-sm
                        font-primary
                        font-medium
                        leading-sm
                        lg:text-md
                        lg:leading-md
                        text-neutral-900
                        transition-colors
                        duration-300
                        hover:text-primary
                      '
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Social Media */}

          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
