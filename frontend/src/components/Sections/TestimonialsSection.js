import React from 'react';
import { TestimonialsMarquee } from '../ui/TestimonialsMarquee';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" data-testid="testimonials-section">
      <TestimonialsMarquee
        title="Success Stories"
        description="Real experiences from healthcare professionals who found their path to Europe"
      />
    </section>
  );
};

export default TestimonialsSection;
