import { useEffect, useState } from 'react';
import { ThemeContext } from './theme-context';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    console.log('darkMode:', darkMode);

    document.documentElement.classList.toggle('dark', darkMode);

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
