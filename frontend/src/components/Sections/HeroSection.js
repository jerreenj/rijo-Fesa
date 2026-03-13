import React from 'react';

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1534366352136-70b36caec941?w=1920&q=100';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black overflow-hidden" data-testid="hero-section">
      {/* Background Image - Dublin sunset */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          opacity: 0.9
        }}
      ></div>
      
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
};

export default HeroSection;
