import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden" data-testid="cta-section">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[128px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ready to Start Your
            <br />
            <span className="text-gray-500">Global Career?</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Join hundreds of professionals who have transformed their careers with Fesa Global. Your international journey starts with a single step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/919744377949"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Book a Consultation
            </a>
          </div>
          
          <p className="mt-8 text-gray-600 text-sm">
            No obligation • Free initial consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
