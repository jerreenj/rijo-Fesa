import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    location: 'Now in Germany',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    quote: 'Fesa Global made my dream of working in Europe a reality. Their guidance throughout the process was invaluable, and they found me a position that perfectly matched my skills.'
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    role: 'ICU Nurse',
    location: 'Now in UK',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    quote: 'The team went above and beyond to help me relocate. From CV preparation to interview coaching, they supported me every step of the way. Highly recommended!'
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Physiotherapist',
    location: 'Now in Ireland',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80',
    quote: 'I was skeptical at first, but Fesa Global proved their worth. They understood my career goals and found me the perfect opportunity. The process was smooth and professional.'
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-black relative" data-testid="testimonials-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm text-gray-500 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Success <span className="text-gray-500">Stories</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-white/5" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white/10">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-xl text-gray-300 leading-relaxed mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <div className="text-white font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[activeIndex].role}</div>
                  <div className="text-gray-600 text-sm">{testimonials[activeIndex].location}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                data-testid="prev-testimonial-btn"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === i ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                data-testid="next-testimonial-btn"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
