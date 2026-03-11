import React from 'react';
import { TestimonialsMarquee } from '../ui/TestimonialsMarquee';

const testimonials = [
  {
    author: {
      name: 'Dr. Sarah Johnson',
      handle: 'Cardiologist • Germany',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    text: 'FesaGlobal made my dream of working in Europe a reality. Their guidance throughout the process was invaluable and they found me a perfect position.'
  },
  {
    author: {
      name: 'Maria Rodriguez',
      handle: 'ICU Nurse • United Kingdom',
      avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face'
    },
    text: 'The team went above and beyond to help me relocate. From CV preparation to interview coaching, they supported me every step of the way.'
  },
  {
    author: {
      name: 'James Wilson',
      handle: 'Physiotherapist • Ireland',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    text: 'I was skeptical at first, but FesaGlobal proved their worth. They understood my career goals and found me the perfect opportunity.'
  },
  {
    author: {
      name: 'Priya Sharma',
      handle: 'Dental Surgeon • Netherlands',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    text: 'Professional, efficient, and truly caring about their candidates. The whole process was smooth and well-organized.'
  },
  {
    author: {
      name: 'Ahmed Hassan',
      handle: 'General Practitioner • Sweden',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
    },
    text: 'FesaGlobal helped me navigate the complex process of medical license recognition in Sweden. Now I am living my dream.'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" data-testid="testimonials-section">
      <TestimonialsMarquee
        title="Success Stories"
        description="Real experiences from healthcare professionals who found their path to Europe with FesaGlobal"
        testimonials={testimonials}
      />
    </section>
  );
};

export default TestimonialsSection;
