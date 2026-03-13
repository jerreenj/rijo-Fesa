import React from 'react';

const BG_IMAGE_URL = 'https://customer-assets.emergentagent.com/job_fesa-recruitment/artifacts/52eko18t_crawford-jolly-qk9cRM42_HI-unsplash.jpg';

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
