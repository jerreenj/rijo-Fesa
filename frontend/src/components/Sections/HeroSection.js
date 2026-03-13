import React from 'react';

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1920&q=80';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden px-4" data-testid="hero-section">
      {/* Background Image - Cobh Ireland - No blur, aligned to show church top */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundPosition: 'center top',
          opacity: 0.85
        }}
      ></div>
      
      {/* Light overlay for nav readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
};

export default HeroSection;
