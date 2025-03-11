
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary/80 dark:bg-secondary/30 hover:bg-secondary dark:hover:bg-secondary/50 transition-all duration-300 backdrop-blur-sm"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun className={`absolute transition-all duration-300 ease-in-out transform ${
            theme === 'dark' ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'
          } text-yellow-500`} 
          size={18} 
        />
        <Moon className={`absolute transition-all duration-300 ease-in-out transform ${
            theme === 'light' ? 'opacity-0 scale-50 -rotate-90' : 'opacity-100 scale-100 rotate-0'
          } text-neon-blue`} 
          size={18} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
