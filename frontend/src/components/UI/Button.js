import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-200 rounded-full',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 rounded-full border border-gray-700',
    outline: 'bg-transparent border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 rounded-full',
    ghost: 'bg-transparent text-white hover:bg-white/10 rounded-lg',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-sm py-3 px-6',
    lg: 'text-base py-4 px-8',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
