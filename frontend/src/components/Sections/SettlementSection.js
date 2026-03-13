import React from 'react';
import { Car, Users, MapPin } from 'lucide-react';

const supportServices = [
  { icon: Car, title: "Driver's License", desc: "Complete guidance for getting your Irish license" },
  { icon: Users, title: "Culture & Lifestyle", desc: "Understand Irish customs and workplace culture" },
  { icon: MapPin, title: "Local Guidance", desc: "Transport, schools & amenities" }
];

const SettlementSection = () => {
  return (
    <section id="settlement" className="py-12 sm:py-16 bg-black border-t border-white/5 px-4" data-testid="settlement-section">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-medium text-white text-center mb-8">
          We Help You <span className="text-gray-500">Settle In</span>
        </h3>

        <div className="flex justify-center items-start gap-12 sm:gap-20">
          {supportServices.map((service, index) => (
            <div key={index} className="text-center">
              <service.icon className="w-5 h-5 text-gray-500 mx-auto mb-2" />
              <h4 className="text-white text-sm font-medium">{service.title}</h4>
              <p className="text-gray-500 text-xs mt-1 max-w-[140px]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SettlementSection;
