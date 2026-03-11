import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does the placement process take?',
    answer: 'The complete process typically takes around 90 days, including consultation, document verification, employer matching, interviews, and relocation paperwork. Timeline varies based on destination country and specific requirements.'
  },
  {
    question: 'What countries do you operate in?',
    answer: 'We specialize in placements across Europe including UK, Germany, France, Spain, Italy, Netherlands, Sweden, and more. We\'re expanding to North American markets soon.'
  },
  {
    question: 'Do I need to speak the local language?',
    answer: 'Language requirements vary by position and country. Some roles only require English, especially in UK, Ireland, or Nordic countries. We offer language training resources when needed.'
  },
  {
    question: 'What qualifications are needed for healthcare roles?',
    answer: 'Healthcare qualifications need recognition in your destination country. This involves degree verification, professional registration, and sometimes additional exams. We guide you through the entire recognition process.'
  },
  {
    question: 'How do you help with relocation?',
    answer: 'Our support includes work permits, visa applications, housing guidance, healthcare information, cultural orientation, and language courses. We coordinate with employers for a smooth transition.'
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-32 bg-black relative" data-testid="faq-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Header */}
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Common
              <br />
              <span className="text-gray-500">Questions</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Everything you need to know about our recruitment process and working in Europe.
            </p>
            
            <div className="mt-10 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <p className="text-gray-400 text-sm">Still have questions?</p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-white font-medium mt-2 hover:underline"
              >
                Contact our team
              </a>
            </div>
          </div>

          {/* Right - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-white text-black' : 'bg-white/5 text-gray-400'
                  }`}>
                    {openIndex === index ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
