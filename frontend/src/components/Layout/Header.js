import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_fesa-recruitment/artifacts/fk8w3ch4_FESA%20Global%20LOGO%20B%26W-01%20%281%29.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center ${isScrolled ? 'justify-end' : 'justify-between'} h-20 sm:h-24`}>

          {/* Logo - Left, only visible when not scrolled */}
          {!isScrolled && (
            <a href="#home" className="flex-shrink-0">
              <img 
                src={LOGO_URL} 
                alt="Fesa Global" 
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.2))' }}
              />
            </a>
          )}

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-6 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all"
              data-testid="get-started-btn"
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
          <div className="lg:hidden absolute left-0 right-0 top-20 bg-black/98 backdrop-blur-xl border-t border-white/5 p-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 py-3 bg-white text-black text-center font-medium rounded-full"
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
