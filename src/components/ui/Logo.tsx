import logoSymbol from '../../assets/icons/logo-symbol.svg';

const Logo = () => {
  return (
    <a
      href='#'
      className='
      flex
      items-center
      gap-[8.53px]
      shrink-0
      whitespace-nowrap
      '
    >
      <img
        src={logoSymbol}
        alt='Your Logo'
        loading='lazy'
        decoding='async'
        className='h-7 w-auto shrink-0'
      />
      <span
        className='
      whitespace-nowrap
      font-semibold 
      font-primary 
      leading-xl 
      text-xl
      '
      >
        Your Logo
      </span>
    </a>
  );
};

export default Logo;
