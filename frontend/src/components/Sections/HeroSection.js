import React from 'react';
import RotatingEarth from '../ui/WireframeDottedGlobe';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden px-4" data-testid="hero-section">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
      
      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto pt-16">
        
        {/* Globe - responsive and prominent */}
        <div className="relative w-full flex justify-center mb-6 sm:mb-8">
          <div className="w-[280px] sm:w-[380px] md:w-[450px] lg:w-[500px]">
            <RotatingEarth 
              width={500} 
              height={500} 
              className="w-full" 
            />
          </div>
        </div>

        {/* Company Name - centered below globe */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-[#00CED1]">FESA</span>
            <span className="text-white ml-3 sm:ml-4">GLOBAL</span>
          </h1>
          <p className="mt-2 sm:mt-3 text-gray-500 text-sm sm:text-base tracking-[0.2em] uppercase">
            Recruitment Services LLP
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
