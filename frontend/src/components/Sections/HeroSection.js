import React from 'react';

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1920&q=80';
const LOGO_URL = 'https://customer-assets.emergentagent.com/job_fesa-recruitment/artifacts/fk8w3ch4_FESA%20Global%20LOGO%20B%26W-01%20%281%29.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black overflow-hidden" data-testid="hero-section">
      {/* Background Image - Cobh Ireland */}
      <div 
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundPosition: 'center top',
          opacity: 0.85
        }}
      ></div>
      
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Logo - top left */}
      <div className="absolute top-24 left-6 sm:top-28 sm:left-10 md:left-16 z-10">
        <img 
          src={LOGO_URL} 
          alt="Fesa Global" 
          className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-auto"
          style={{
            opacity: 0.9,
            filter: 'drop-shadow(0 2px 10px rgba(255, 255, 255, 0.3))'
          }}
          data-testid="hero-logo"
        />
      </div>
    </section>
  );
};

export default HeroSection;
