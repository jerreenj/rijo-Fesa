import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import HeroSection from './components/Sections/HeroSection';
import SettlementSection from './components/Sections/SettlementSection';
import ServicesSection from './components/Sections/ServicesSection';
import RegionsSection from './components/Sections/RegionsSection';
import AboutSection from './components/Sections/AboutSection';
import TestimonialsSection from './components/Sections/TestimonialsSection';
import ContactSection from './components/Sections/ContactSection';
import FaqSection from './components/Sections/FaqSection';
import CtaSection from './components/Sections/CtaSection';

function App() {
  useEffect(() => {
    document.title = "Fesa Global | International Healthcare & Construction Recruitment";
    
    const handleAnchorClick = (e) => {
      const target = e.target;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <CtaSection />
      <ServicesSection />
      <RegionsSection />
      <AboutSection />
      <SettlementSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
