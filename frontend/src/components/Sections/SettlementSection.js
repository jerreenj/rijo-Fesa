import React from 'react';
import { Car, Users, MapPin } from 'lucide-react';

const supportServices = [
  { icon: Car, title: "Driver's License", desc: "Complete guidance for getting your Irish license" },
  { icon: Users, title: "Culture & Lifestyle", desc: "Understand Irish customs and workplace culture" },
  { icon: MapPin, title: "Local Guidance", desc: "Transport, schools & amenities" }
];

const SettlementSection = () => {
  return (
    <section id="settlement" className="py-20 sm:py-28 bg-black border-t border-white/5 px-4" data-testid="settlement-section">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-12 sm:mb-16">
          We Help You <span className="text-gray-500">Settle In</span>
        </h3>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-10 sm:gap-16 md:gap-24">
          {supportServices.map((service, index) => (
            <div key={index} className="text-center max-w-[200px]">
              <service.icon className="w-7 h-7 text-gray-400 mx-auto mb-4" />
              <h4 className="text-white text-base sm:text-lg font-medium mb-2">{service.title}</h4>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SettlementSection;
