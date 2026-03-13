import React from 'react';

const BG_IMAGE_URL = 'https://customer-assets.emergentagent.com/job_fesa-recruitment/artifacts/jalbcytc_WhatsApp%20Image%202026-03-13%20at%2010.18.59%20AM.jpeg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black overflow-hidden" data-testid="hero-section">
      {/* Background Image - Desktop: center | Mobile: right side to hide the man */}
      <div 
        className="absolute inset-0 bg-cover bg-center lg:bg-center"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL})`,
          opacity: 0.9
        }}
      ></div>
      
      {/* Mobile background position override */}
      <style>{`
        @media (max-width: 1023px) {
          #home > div:first-child {
            background-position: 70% center !important;
          }
        }
      `}</style>
      
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
};

export default HeroSection;
