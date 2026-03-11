import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';
import Logo from '../UI/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['Home', 'Regions', 'About', 'Testimonials'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-20 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <NavLink 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="px-6 py-2 rounded-full hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
                >
                  {item}
                </NavLink>
              ))}
            </div>

            <a 
              href="#contact" 
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              data-testid="book-consultation-btn"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none z-50 relative"
            onClick={toggleMenu}
            data-testid="mobile-menu-btn"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-45 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: 45 }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen py-20">
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <NavLink 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={toggleMenu}
                  className="text-xl px-6 py-2 rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  {item}
                </NavLink>
              ))}

              <a 
                href="#contact" 
                className="text-xl px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                onClick={toggleMenu}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
