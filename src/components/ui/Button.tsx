import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded transition-all duration-200 flex items-center justify-center border';
  
  const variantClasses = {
    primary: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white hover:bg-black dark:hover:bg-gray-100',
    secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-100 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600',
    outline: 'border-gray-900 dark:border-white text-gray-900 dark:text-white bg-transparent hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;