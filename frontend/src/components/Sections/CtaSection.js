import React from 'react';
import { ArrowRight, Phone, Calendar, CheckCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section id="cta" className="py-24 bg-black relative overflow-hidden" data-testid="cta-section">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Main CTA */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
              Start Your Journey
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Work
              <br />
              <span className="text-gray-500">in Europe?</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Take the first step towards your international career. Our team is ready to guide you through every step of the process.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919744377949"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all"
              >
                <Phone className="h-5 w-5" />
                Book Free Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all"
              >
                <Calendar className="h-5 w-5" />
                Contact Form
              </a>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">What You Get</h3>
            
            <div className="space-y-4">
              {[
                'Free initial career consultation',
                'Personalized job matching in Europe',
                'CV optimization for European employers',
                'Interview preparation & coaching',
                'Complete visa & relocation support',
                'Post-placement assistance',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-xs text-gray-500">Placed</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-xs text-gray-500">Countries</div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">90</div>
                  <div className="text-xs text-gray-500">Days Avg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
