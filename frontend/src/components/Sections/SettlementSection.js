import React from 'react';
import { Car, Users, Home, FileText, Heart, MapPin } from 'lucide-react';

const supportServices = [
  {
    icon: Car,
    title: "Driver's License Assistance",
    description: "We guide you through the entire process of getting your driver's license in Ireland - from paperwork to test preparation, making your transition seamless."
  },
  {
    icon: Users,
    title: "Cultural Integration",
    description: "Learn about Irish culture, customs, and workplace etiquette. We help you understand and adapt to your new home quickly."
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Finding a place to live made easy. We assist with housing searches, rental processes, and settling into your new neighborhood."
  },
  {
    icon: FileText,
    title: "Documentation Help",
    description: "From PPS numbers to bank accounts, we handle all the essential paperwork so you can focus on your new career."
  },
  {
    icon: Heart,
    title: "Healthcare Registration",
    description: "Get registered with local GPs and understand the Irish healthcare system with our complete guidance."
  },
  {
    icon: MapPin,
    title: "Local Area Orientation",
    description: "Know your surroundings - we provide information about transport, shopping, schools, and community services."
  }
];

const SettlementSection = () => {
  return (
    <section id="settlement" className="py-20 sm:py-28 bg-gradient-to-b from-black to-gray-900 relative px-4" data-testid="settlement-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#00CED1] text-sm font-medium uppercase tracking-wider">Beyond Recruitment</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            We Help You <span className="text-[#00CED1]">Settle In</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Moving to a new country is more than just finding a job. We support you every step of the way to make Ireland feel like home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportServices.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#00CED1]/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00CED1]/10 flex items-center justify-center mb-5 group-hover:bg-[#00CED1]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#00CED1]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/919744377949" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00CED1] text-black font-semibold rounded-full hover:bg-[#00CED1]/90 transition-all"
          >
            Get Complete Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default SettlementSection;
