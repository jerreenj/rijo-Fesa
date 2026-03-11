import React from 'react';

const Logo = () => {
  return (
    <a href="#home" className="flex items-center gap-3" data-testid="logo">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
        <span className="text-black font-black text-xl">F</span>
      </div>
      <span className="text-2xl font-bold text-white tracking-tight">
        Fesa<span className="text-gray-400">Global</span>
      </span>
    </a>
  );
};

export default Logo;
