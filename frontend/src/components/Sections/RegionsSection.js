import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const regions = {
  europe: [
    {
      name: 'Western Europe',
      countries: 'Germany, France, Netherlands',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
      benefits: ['High salaries', 'Advanced healthcare', 'Work-life balance']
    },
    {
      name: 'Northern Europe',
      countries: 'Sweden, Norway, Denmark',
      image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&q=80',
      benefits: ['Progressive policies', 'Innovation focus', 'Quality of life']
    },
    {
      name: 'United Kingdom',
      countries: 'England, Scotland, Wales',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
      benefits: ['English speaking', 'NHS opportunities', 'Global hub']
    },
    {
      name: 'Southern Europe',
      countries: 'Spain, Italy, Portugal',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80',
      benefits: ['Mediterranean lifestyle', 'Growing sectors', 'Rich culture']
    },
  ],
  americas: [
    {
      name: 'United States',
      countries: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80',
      benefits: ['Top hospitals', 'Competitive pay', 'Career growth'],
      comingSoon: true
    },
    {
      name: 'Canada',
      countries: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80',
      benefits: ['Healthcare system', 'Immigration friendly', 'Quality of life'],
      comingSoon: true
    },
  ]
};

const RegionsSection = () => {
  const [activeTab, setActiveTab] = useState('europe');

  return (
    <section id="regions" className="py-16 sm:py-24 lg:py-32 bg-black relative px-4" data-testid="regions-section">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Global Reach</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4">
              Where We
              <span className="text-gray-500"> Operate</span>
            </h2>
          </div>
          
          <div className="flex bg-white/5 p-1 rounded-full self-start sm:self-auto">
            {['europe', 'americas'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-white text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {regions[activeTab].map((region, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              {region.comingSoon && (
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  Coming Soon
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{region.name}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{region.countries}</p>
                
                <div className="space-y-1.5 sm:space-y-2">
                  {region.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-gray-500" />
                      <span className="text-gray-400 text-xs sm:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
