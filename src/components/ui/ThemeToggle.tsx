import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 ${
        theme === 'dark' 
          ? 'text-yellow-400' 
          : 'text-gray-300 hover:text-white'
      } ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="relative w-5 h-5">
        <Sun 
          size={18} 
          aria-hidden="true"
          className={`absolute inset-0 transition-all duration-500 ${
            theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
          }`} 
        />
        <Moon 
          size={18} 
          aria-hidden="true"
          className={`absolute inset-0 transition-all duration-500 ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;