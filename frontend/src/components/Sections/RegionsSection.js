import React, { useState } from 'react';
import Button from '../UI/Button';
import { CheckCircle } from 'lucide-react';

const RegionCard = ({ 
  name, 
  description, 
  advantages, 
  imageUrl, 
  isComingSoon = false 
}) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative group overflow-hidden rounded-xl h-[28rem]">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      
      {isComingSoon && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          Coming Soon
        </div>
      )}
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="space-y-2 mb-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{advantage}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant={isComingSoon ? "outline" : "primary"} 
          size="sm"
          onClick={handleClick}
        >
          {isComingSoon ? "Notify Me" : "Explore Jobs"}
        </Button>
      </div>
    </div>
  );
};

const RegionsSection = () => {
  const [activeTab, setActiveTab] = useState('europe');
  
  return (
    <section id="regions" className="py-24 bg-gray-900" data-testid="regions-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Where We Operate</h2>
          <p className="text-gray-400">
            Discover job opportunities across various regions and countries. Our extensive network connects
            you with prestigious employers in healthcare and construction sectors.
          </p>
          
          <div className="mt-8 inline-flex p-1 bg-gray-800 rounded-lg">
            <button
              onClick={() => setActiveTab('europe')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'europe' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              data-testid="europe-tab"
            >
              Europe
            </button>
            <button
              onClick={() => setActiveTab('america')}
              className={`px-6 py-2 rounded-md transition-all ${
                activeTab === 'america' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              data-testid="america-tab"
            >
              America
            </button>
          </div>
        </div>

        {activeTab === 'europe' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RegionCard 
              name="Western Europe"
              description="Premium opportunities in countries with strong economies and healthcare systems."
              advantages={[
                "High salaries and excellent benefits",
                "Work-life balance culture",
                "Advanced facilities and technology"
              ]}
              imageUrl="https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <RegionCard 
              name="Northern Europe"
              description="Discover the exceptional quality of life and professional growth in Nordic countries."
              advantages={[
                "Progressive workplace policies",
                "Innovative healthcare systems",
                "Family-friendly environment"
              ]}
              imageUrl="https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <RegionCard 
              name="Central & Eastern Europe"
              description="Emerging markets with increasing demand for qualified professionals."
              advantages={[
                "Growing economies with new opportunities",
                "Lower cost of living",
                "Rich cultural experience"
              ]}
              imageUrl="https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <RegionCard 
              name="Southern Europe"
              description="Combine career growth with Mediterranean lifestyle in these vibrant countries."
              advantages={[
                "Excellent climate and quality of life",
                "Growing healthcare and construction sectors",
                "Rich cultural heritage"
              ]}
              imageUrl="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <RegionCard 
              name="United Kingdom"
              description="Diverse opportunities in one of Europe's largest job markets."
              advantages={[
                "Prestigious institutions and companies",
                "Competitive salaries",
                "English-speaking environment"
              ]}
              imageUrl="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <RegionCard 
              name="Ireland"
              description="A thriving economy with strong demand for healthcare and construction professionals."
              advantages={[
                "Growing tech and healthcare sectors",
                "English-speaking country",
                "EU member with global connections"
              ]}
              imageUrl="https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RegionCard 
              name="United States"
              description="Exciting opportunities across diverse states and metropolitan areas."
              advantages={[
                "Competitive compensation packages",
                "Advanced healthcare facilities",
                "Major construction projects nationwide"
              ]}
              imageUrl="https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              isComingSoon={true}
            />
            <RegionCard 
              name="Canada"
              description="Excellent work-life balance in one of the world's most livable countries."
              advantages={[
                "Universal healthcare system",
                "Growing infrastructure development",
                "Welcoming immigration policies"
              ]}
              imageUrl="https://images.pexels.com/photos/2247677/pexels-photo-2247677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              isComingSoon={true}
            />
            <RegionCard 
              name="Latin America"
              description="Emerging opportunities in rapidly developing economies."
              advantages={[
                "Growing demand for healthcare professionals",
                "Major infrastructure projects",
                "Attractive cost of living"
              ]}
              imageUrl="https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              isComingSoon={true}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default RegionsSection;
