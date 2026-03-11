import React from 'react';

const Logo = ({ variant = 'default' }) => {
  if (variant === 'minimal') {
    return (
      <a href="#home" className="flex items-center" data-testid="logo">
        <span className="text-2xl font-bold text-white tracking-tight">
          Fesa<span className="font-light">Global</span>
        </span>
      </a>
    );
  }

  return (
    <a href="#home" className="flex items-center" data-testid="logo">
      <span className="text-2xl font-bold text-white tracking-tight">
        Fesa<span className="font-light">Global</span>
      </span>
    </a>
  );
};

export default Logo;
