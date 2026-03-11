import React from 'react';
import { Mouse } from 'lucide-react';
import RotatingEarth from '../ui/WireframeDottedGlobe';

const HeroSection = () => {
  const scrollToNext = () => {
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
      
      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full pt-20">
        {/* Globe - responsive and prominent */}
        <div className="relative w-full flex justify-center">
          <div className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px]">
            <RotatingEarth 
              width={600} 
              height={600} 
              className="opacity-90 w-full" 
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors group"
        aria-label="Scroll down"
      >
        <Mouse className="h-6 w-6 sm:h-7 sm:w-7 animate-bounce" />
        <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
      </button>
    </section>
  );
};

export default HeroSection;
