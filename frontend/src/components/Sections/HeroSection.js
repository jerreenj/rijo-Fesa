import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import RotatingEarth from '../ui/WireframeDottedGlobe';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden" data-testid="hero-section">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/5 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[128px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-400">Now placing professionals across Europe</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Your Global
              <br />
              <span className="text-gray-500">Career Journey</span>
              <br />
              Starts Here
            </h1>

            <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
              We connect exceptional healthcare and construction professionals with premium opportunities across Europe. Your success is our mission.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300"
                data-testid="get-started-btn"
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/919744377949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                data-testid="whatsapp-btn"
              >
                <Play className="h-4 w-4" />
                Book a Call
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              {[
                { value: '100+', label: 'Placements' },
                { value: '5+', label: 'Countries' },
                { value: '100%', label: 'Success Rate' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Globe */}
          <div className="animate-slideInRight hidden lg:block">
            <div className="relative">
              <RotatingEarth width={600} height={600} className="opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
