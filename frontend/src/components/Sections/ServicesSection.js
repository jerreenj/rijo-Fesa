import React from 'react';
import { Stethoscope, FileText, Plane, GraduationCap, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Healthcare Recruitment',
    description: 'Specialized placement for doctors, nurses, and medical professionals in leading European healthcare institutions.',
    features: ['Hospital placements', 'Clinic positions', 'Specialist roles']
  },
  {
    icon: FileText,
    title: 'CV & Application',
    description: 'Professional assistance crafting compelling CVs tailored to European standards.',
    features: ['CV optimization', 'Cover letters', 'Portfolio review']
  },
  {
    icon: GraduationCap,
    title: 'Interview Coaching',
    description: 'Comprehensive preparation with mock sessions and expert feedback.',
    features: ['Mock interviews', 'Feedback sessions', 'Cultural prep']
  },
  {
    icon: Plane,
    title: 'Relocation Support',
    description: 'End-to-end assistance with moving to a new country.',
    features: ['Visa assistance', 'Housing support', 'Onboarding help']
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-black relative px-4" data-testid="services-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">What we offer</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
            Services Tailored
            <br />
            <span className="text-gray-500">For Your Success</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Comprehensive recruitment solutions designed to connect talented professionals with exceptional European opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 lg:p-8 bg-white/[0.02] border border-white/5 rounded-xl sm:rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span key={i} className="px-2.5 sm:px-3 py-1 bg-white/5 text-gray-400 text-xs sm:text-sm rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
