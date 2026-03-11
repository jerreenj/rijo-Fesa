import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white pr-4">{question}</h3>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-blue-500" />
          ) : (
            <Plus className="h-5 w-5 text-blue-500" />
          )}
        </div>
      </button>
      
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 bg-gray-900" data-testid="faq-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Find answers to common questions about our recruitment process, working in Europe, 
            and how we help professionals secure their dream jobs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700">
            <FaqItem
              question="How long does the entire process take from application to placement?"
              answer="The complete process typically takes around 90 days. This timeline includes initial consultation, document verification, employer matching, interview processes, and necessary paperwork for relocation. The exact duration may vary depending on factors such as your destination country, specific role requirements, and visa processing times. Our team works efficiently to ensure smooth progression through each stage while keeping you informed throughout the journey."
            />

            <FaqItem
              question="How does the recruitment process work with RJ Associates?"
              answer="Our process begins with an initial consultation to understand your career goals and skills. We then match you with suitable opportunities, guide you through the application process, help prepare for interviews, and assist with relocation if needed. Throughout the journey, our team provides personalized support tailored to your specific situation."
            />
            
            <FaqItem
              question="What countries do you currently operate in?"
              answer="We currently specialize in placements across Europe, including the UK, Germany, France, Spain, Italy, Netherlands, Sweden, and many other countries. We're also expanding to North American markets soon, with opportunities in the US and Canada coming in the near future."
            />
            
            <FaqItem
              question="Do I need to speak the local language to work in a European country?"
              answer="Language requirements vary by position and country. Some roles, particularly in international companies or in healthcare settings in countries like the UK, Ireland, or Nordic countries, may only require English. For others, basic knowledge of the local language might be necessary. We offer language training resources for candidates when needed."
            />
            
            <FaqItem
              question="How do you help with the relocation process?"
              answer="Our relocation support includes assistance with work permits and visa applications, guidance on housing options, information about healthcare and insurance, cultural orientation, and sometimes language courses. We coordinate with employers to ensure a smooth transition and provide a detailed relocation guide specific to your destination country."
            />
            
            <FaqItem
              question="What qualifications do I need to work in healthcare in Europe?"
              answer="Healthcare qualifications need to be recognized in the country where you wish to work. This typically involves verification of your degree, professional registration in your home country, and sometimes additional exams or registrations. We guide candidates through the recognition process, which varies by country and specific healthcare profession."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
