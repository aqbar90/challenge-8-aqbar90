interface IndustryMenuProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const IndustryMenu = ({ title, active, onClick }: IndustryMenuProps) => {
  return (
    <button
      onClick={onClick}
      className='
        flex
        items-center
        gap-2
        py-3
        text-left
        transition-all
        duration-300
      '
    >
      {/* Indicator */}

      <span
        className={`
          block
          h-7
          w-1
          rounded-full
          transition-all
          duration-300
          ${active ? 'bg-primary' : 'bg-neutral-300'}
        `}
      />

      {/* Label */}

      <span
        className={`
          text-md
          font-primary
          font-bold
          tracking-display
          leading-md
          md:text-lg
          md:leading-lg
          lg:text-xl
          lg:leading-xl
          transition-all
          duration-300
          ${active ? 'font-bold font-primary text-neutral-800' : 'text-neutral-400 dark:text-neutral-400'}
        `}
      >
        {title}
      </span>
    </button>
  );
};

export default IndustryMenu;
