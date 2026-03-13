import React from 'react';

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1671758709672-cab56bdb545c?w=1920&q=100';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black overflow-hidden" data-testid="hero-section">
      {/* Background Image - Dublin sunset */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundPosition: 'center bottom',
          opacity: 0.85
        }}
      ></div>
      
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
};

export default HeroSection;
