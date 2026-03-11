import React from 'react';
import Button from '../UI/Button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden" data-testid="cta-section">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take Your Career Across Borders?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who have transformed their careers with RJ Associates.
            Your international journey starts with a simple conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="group"
              onClick={scrollToTop}
            >
              <span>Register Your CV</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToTop}
            >
              Book a Consultation
            </Button>
          </div>
          
          <p className="mt-8 text-blue-200">
            No obligation. Free initial consultation to discuss your options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
