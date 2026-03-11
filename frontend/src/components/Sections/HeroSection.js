import React from 'react';
import { Mail, Send, Award, Users, Globe, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden flex items-center" data-testid="hero-section">
      {/* Background Animation Dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                Your Career in Europe
                <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Starts Here
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                Book your free consultation today.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/919744377949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                  data-testid="whatsapp-btn"
                >
                  <Send className="mr-2 h-5 w-5" />
                  <span>WhatsApp Consultation</span>
                </a>
                <a 
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  data-testid="email-consultation-btn"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span>Email Consultation</span>
                </a>
              </div>
              
              <div className="mt-16 flex flex-col space-y-4">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">How to Get Started</h3>
                  <ol className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 mr-3 mt-0.5">1</span>
                      <span className="text-gray-300">Choose your preferred consultation method (WhatsApp/Email)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 mr-3 mt-0.5">2</span>
                      <span className="text-gray-300">Share your basic details and CV</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 mr-3 mt-0.5">3</span>
                      <span className="text-gray-300">Schedule your free consultation</span>
                    </li>
                  </ol>
                </div>
                
                <div className="text-center lg:text-left">
                  <p className="text-gray-400 text-sm">
                    * Our team typically responds within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-slideInRight mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
                <h3 className="text-2xl text-white font-semibold mb-8">Success Stories</h3>
                
                <div className="space-y-8">
                  <div className="bg-gray-800/50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <Award className="h-6 w-6 text-yellow-500 mr-3" />
                      <span className="text-white font-medium text-lg">100+ Successful Placements</span>
                    </div>
                    <p className="text-gray-400">Healthcare professionals placed in leading European hospitals</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <Globe className="h-6 w-6 text-green-500 mr-3" />
                      <span className="text-white font-medium text-lg">5+ European Countries</span>
                    </div>
                    <p className="text-gray-400">Growing network of healthcare institutions across Europe</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <Users className="h-6 w-6 text-blue-500 mr-3" />
                      <span className="text-white font-medium text-lg">100% Client Satisfaction</span>
                    </div>
                    <p className="text-gray-400">Perfect satisfaction rate from placed professionals</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <Star className="h-6 w-6 text-purple-500 mr-3" />
                      <span className="text-white font-medium text-lg">Expert Career Guidance</span>
                    </div>
                    <p className="text-gray-400">Personalized support throughout your journey to Europe</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
