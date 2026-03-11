import React from 'react';

const Logo = () => {
  return (
    <a href="#home" className="flex items-center" data-testid="logo">
      <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-purple-700 transition-all duration-300 animate-fadeIn">
        RJ Associates
      </span>
    </a>
  );
};

export default Logo;
