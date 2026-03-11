import React from 'react';
import { ArrowDown, Send, Mail } from 'lucide-react';
import RotatingEarth from '../ui/WireframeDottedGlobe';

const HeroSection = () => {
  const scrollToNext = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden px-4" data-testid="hero-section">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
      
      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">
        {/* Brand - Large and centered */}
        <div className="mb-6 sm:mb-8 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Fesa<span className="font-light text-gray-500">Global</span>
          </h1>
        </div>

        {/* Globe - responsive size */}
        <div className="relative w-full flex justify-center mb-6 sm:mb-8">
          <div className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px]">
            <RotatingEarth 
              width={typeof window !== 'undefined' && window.innerWidth < 640 ? 280 : 500} 
              height={typeof window !== 'undefined' && window.innerWidth < 640 ? 280 : 500} 
              className="opacity-90 w-full" 
            />
          </div>
        </div>

        {/* Tagline */}
        <div className="animate-fadeIn w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
            Your Career in Europe
            <br />
            <span className="text-gray-500">Starts Here</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 px-4">
            Book your free consultation today.
          </p>

          {/* Quick action buttons - stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <a
              href="https://wa.me/919744377949"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-all text-sm sm:text-base"
              data-testid="whatsapp-btn"
            >
              <Send className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all text-sm sm:text-base"
              data-testid="email-btn"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
