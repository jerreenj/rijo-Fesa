import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Static testimonials data (no Supabase dependency)
const staticTestimonials = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    position: 'Cardiologist',
    location: 'Now working in Germany',
    image_url: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'RJ Associates made my dream of working in Europe a reality. Their guidance throughout the process was invaluable, and they found me a position that perfectly matched my skills and aspirations.'
  },
  {
    id: '2',
    name: 'Nurse Maria Rodriguez',
    position: 'ICU Nurse',
    location: 'Now working in UK',
    image_url: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'The team at RJ Associates went above and beyond to help me relocate to the UK. From CV preparation to interview coaching, they supported me every step of the way.'
  },
  {
    id: '3',
    name: 'James Wilson',
    position: 'Physiotherapist',
    location: 'Now working in Ireland',
    image_url: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300',
    quote: 'I was skeptical at first, but RJ Associates proved their worth. They understood my career goals and found me the perfect opportunity in Ireland. Highly recommended!'
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = staticTestimonials;
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-gray-400">
              Be the first to share your success story with RJ Associates!
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-900 to-black" data-testid="testimonials-section">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-gray-400">
            Real experiences from healthcare professionals who found their path to Europe
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-500/30" />
            
            <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30 flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image_url} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-blue-400 text-sm">
                    {testimonials[activeIndex].position}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[activeIndex].location}
                  </div>
                </div>
              </div>
            </div>
            
            {testimonials.length > 1 && (
              <div className="flex justify-center space-x-4 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  data-testid="prev-testimonial-btn"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeIndex === index
                          ? 'bg-blue-500 w-6'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  data-testid="next-testimonial-btn"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
