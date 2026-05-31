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
      '
    >
      <img src={logoSymbol} alt='Your Logo' className='h-7 w-auto' />
      <span
        className='
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
