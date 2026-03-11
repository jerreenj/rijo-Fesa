import React from 'react';

const NavLink = ({ href, children, onClick, className = '' }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-gray-300 hover:text-white transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
