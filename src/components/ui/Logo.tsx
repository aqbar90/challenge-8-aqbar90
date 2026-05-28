import logoSymbol from '../../assets/icons/logo-symbol.svg';

const Logo = () => {
  return (
    <a
      href='#'
      className='
      flex
      items-center
      shrink-0
      gap-[8.53px]
      text-xl
      font-bold
     text-neutral-950
      '
    >
      <img
        src={logoSymbol}
        alt='Your Logo'
        className='h-10 md:h-12 lg:h-14 w-auto'
      />
      <span className='font-bold font-primary leading-none text-display-xs md:text-display-sm lg:text-display-md text-neutral-950'>
        Your Logo
      </span>
    </a>
  );
};

export default Logo;
