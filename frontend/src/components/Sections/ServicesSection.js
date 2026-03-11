import React from 'react';
import { Stethoscope, FileText, Plane, Car } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/5 transform hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-blue-600/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-600/20 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900" data-testid="services-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Specialized Services</h2>
          <p className="text-gray-400">
            We provide comprehensive recruitment solutions in the healthcare sector,
            connecting talented professionals with premium opportunities across Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Stethoscope className="h-7 w-7 text-blue-500" />}
            title="Healthcare Recruitment"
            description="Specialized recruitment for doctors, nurses, medical technicians, and all healthcare professionals across European hospitals and clinics."
          />
          <ServiceCard
            icon={<FileText className="h-7 w-7 text-blue-500" />}
            title="CV & Application Support"
            description="Professional assistance with crafting compelling CVs and job applications tailored to European standards and employer expectations."
          />
          <ServiceCard
            icon={<Car className="h-7 w-7 text-blue-500" />}
            title="Driving Lessons"
            description="Comprehensive European driving lessons in Kerala to prepare you for international driving. Get ready to navigate European roads with confidence."
          />
          <ServiceCard
            icon={<Plane className="h-7 w-7 text-blue-500" />}
            title="Relocation Assistance"
            description="Comprehensive support with relocating to a new country, including paperwork, accommodation, and settling-in services."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
