import React from 'react';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_fesa-recruitment/artifacts/pa11j8us_WhatsApp%20Image%202026-03-11%20at%208.16.40%20PM.jpeg';
const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden px-4" data-testid="hero-section">
      {/* Background Image with Blur - More Visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          filter: 'blur(4px)',
          opacity: 0.6,
          transform: 'scale(1.05)'
        }}
      ></div>
      
      {/* Lighter overlay for better visibility */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Main content - centered logo only */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
        
        {/* Logo - centered and prominent */}
        <div className="flex justify-center items-center">
          <img 
            src={LOGO_URL} 
            alt="Fesa Global" 
            className="w-[280px] sm:w-[380px] md:w-[450px] lg:w-[500px] h-auto object-contain"
            data-testid="hero-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
