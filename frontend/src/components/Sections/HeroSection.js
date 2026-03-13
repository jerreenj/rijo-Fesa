import React from 'react';

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1718121151452-ca4e4c419a27?w=1920&q=100';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black overflow-hidden" data-testid="hero-section">
      {/* Background Image - Cobh Ireland colorful houses HD */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:bg-center"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          opacity: 1
        }}
      ></div>
      
      {/* Mobile background position override */}
      <style>{`
        @media (max-width: 1023px) {
          #home > div:first-child {
            background-position: center center !important;
            background-size: cover !important;
          }
        }
      `}</style>
      
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
};

export default HeroSection;
