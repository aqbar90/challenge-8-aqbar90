import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/useTheme';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        border
        border-neutral-200
        transition-all
        duration-300
        hover:border-primary
      '
    >
      {darkMode ? (
        <Sun size={22} fill='#FACC15' color='#FACC15' strokeWidth={2} />
      ) : (
        <Moon size={22} fill='#A78BFA' color='#A78BFA' strokeWidth={2} />
      )}
    </button>
  );
};

export default ThemeToggle;
