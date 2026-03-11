import React from 'react';
import { cn } from '../../lib/utils';
import { TestimonialCard } from './TestimonialCard';

export function TestimonialsMarquee({ 
  title,
  description,
  testimonials,
  className 
}) {
  return (
    <section className={cn(
      'bg-black text-white',
      'py-16 sm:py-24 md:py-32 px-0',
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center sm:gap-12">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
          <h2 className="max-w-[720px] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            {title}
          </h2>
          <p className="text-base sm:text-lg max-w-[600px] text-gray-400">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 gap-4 flex-row">
            <div className="flex shrink-0 justify-around gap-4 animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-black sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-black sm:block" />
        </div>
      </div>
    </section>
  );
}
