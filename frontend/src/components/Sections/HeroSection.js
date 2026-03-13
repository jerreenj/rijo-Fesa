import React from 'react';

const BG_IMAGE_URL = 'https://customer-assets.emergentagent.com/job_fesa-recruitment/artifacts/2szu7ux9_photo_2026-03-13_10-38-13.jpg';

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
    </section>
  );
};

export default HeroSection;
