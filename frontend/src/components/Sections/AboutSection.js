import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Professionals Placed', icon: Users },
  { value: '35+', label: 'Partner Companies', icon: Target },
  { value: '2023', label: 'Founded', icon: Award },
  { value: '90', label: 'Days Average Placement', icon: Zap },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-black relative" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hidden md:block">
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wider">About Fesa Global</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Building Bridges
              <br />
              <span className="text-gray-500">Across Borders</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Founded in 2023, Fesa Global has rapidly emerged as a trusted partner for healthcare and construction professionals seeking international career opportunities.
              </p>
              <p>
                Our experienced team combines deep industry knowledge with a personalized approach to every placement. We understand both employer needs and candidate aspirations, creating perfect matches that drive success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { title: 'Excellence', desc: 'Highest standards in every aspect' },
                { title: 'Client-Focused', desc: 'Your success is our priority' },
                { title: 'Expertise', desc: 'Specialized healthcare knowledge' },
                { title: 'Efficiency', desc: 'Streamlined, effective processes' },
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-white font-medium mb-1 group-hover:text-gray-300 transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
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
