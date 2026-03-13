import React from 'react';
import { Car, Users, Home, FileText, Heart, MapPin } from 'lucide-react';

const supportServices = [
  { icon: Car, title: "Driver's License", desc: "Complete guidance for getting your Irish license" },
  { icon: Users, title: "Culture & Lifestyle", desc: "Understand Irish customs and workplace culture" },
  { icon: Home, title: "Accommodation", desc: "Help finding your new home" },
  { icon: FileText, title: "Documentation", desc: "PPS, bank accounts & paperwork" },
  { icon: Heart, title: "Healthcare", desc: "GP registration & health system" },
  { icon: MapPin, title: "Local Guidance", desc: "Transport, schools & amenities" }
];

const SettlementSection = () => {
  return (
    <section id="settlement" className="py-16 sm:py-20 bg-black border-t border-white/5 px-4" data-testid="settlement-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">
            We Help You <span className="text-gray-500">Settle In</span>
          </h3>
          <p className="mt-2 text-gray-500 text-sm">More than recruitment — complete relocation support</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {supportServices.map((service, index) => (
            <div key={index} className="text-center p-4">
              <service.icon className="w-5 h-5 text-gray-400 mx-auto mb-2" />
              <h4 className="text-white text-sm font-medium mb-1">{service.title}</h4>
              <p className="text-gray-500 text-xs">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SettlementSection;
