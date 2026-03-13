import React from 'react';

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1741689944015-972d0db7dea2?w=1920&q=80';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden px-4" data-testid="hero-section">
      {/* Background Image - Colorful Ireland with houses */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          filter: 'blur(4px)',
          opacity: 0.6,
          transform: 'scale(1.05)'
        }}
      ></div>
      
      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default HeroSection;
