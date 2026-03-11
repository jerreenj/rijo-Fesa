import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../UI/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Regions', href: '#regions' },
    { name: 'About', href: '#about' },
    { name: 'Stories', href: '#testimonials' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all duration-300"
              data-testid="book-consultation-btn"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bg-black/98 backdrop-blur-xl border-t border-white/5 p-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-white py-2"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-white text-black text-center font-medium rounded-full"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
