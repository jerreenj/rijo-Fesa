import React from 'react';

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1920&q=80';
const LOGO_URL = 'https://customer-assets.emergentagent.com/job_fesa-recruitment/artifacts/fk8w3ch4_FESA%20Global%20LOGO%20B%26W-01%20%281%29.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden px-4" data-testid="hero-section">
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
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Glass Logo - Translucent overlay */}
      <div className="relative z-10 flex items-center justify-center">
        <div 
          className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 sm:p-12 md:p-16"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 80px rgba(255, 255, 255, 0.05)'
          }}
        >
          <img 
            src={LOGO_URL} 
            alt="Fesa Global" 
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] h-auto opacity-90"
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))'
            }}
            data-testid="hero-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
