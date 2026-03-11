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
    <section id="home" className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
      
      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20">
        {/* Brand */}
        <div className="mb-8 animate-fadeIn">
          <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Fesa<span className="font-light text-gray-400">Global</span>
          </span>
        </div>

        {/* Globe - centered and prominent */}
        <div className="relative mb-8">
          <RotatingEarth width={500} height={500} className="opacity-90" />
        </div>

        {/* Tagline */}
        <div className="animate-fadeIn max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Your Career in Europe
            <br />
            <span className="text-gray-500">Starts Here</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8">
            Book your free consultation today.
          </p>

          {/* Quick action buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="https://wa.me/919744377949"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-all"
              data-testid="whatsapp-btn"
            >
              <Send className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all"
              data-testid="email-btn"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
