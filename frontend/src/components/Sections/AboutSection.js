import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-black relative px-4" data-testid="about-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hidden sm:block">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">100+</div>
                  <div className="text-xs text-gray-500">Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">35+</div>
                  <div className="text-xs text-gray-500">Partners</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">About FesaGlobal</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              Building Bridges
              <br />
              <span className="text-gray-500">Across Borders</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              <p>
                Founded in 2023, FesaGlobal has rapidly emerged as a trusted partner for healthcare professionals seeking international career opportunities.
              </p>
              <p>
                Our experienced team combines deep industry knowledge with a personalized approach to every placement.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: 'Excellence', desc: 'Highest standards in every aspect' },
                { title: 'Client-Focused', desc: 'Your success is our priority' },
                { title: 'Expertise', desc: 'Specialized healthcare knowledge' },
                { title: 'Efficiency', desc: 'Streamlined, effective processes' },
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-white font-medium text-sm sm:text-base mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
