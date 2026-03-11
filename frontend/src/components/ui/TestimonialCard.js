import React from 'react';
import { cn } from '../../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

export function TestimonialCard({ author, text, href, className }) {
  const Card = href ? 'a' : 'div';
  
  return (
    <Card
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'flex flex-col rounded-xl border border-white/5',
        'bg-gradient-to-b from-white/[0.03] to-white/[0.01]',
        'p-4 text-start sm:p-5',
        'hover:from-white/[0.05] hover:to-white/[0.02]',
        'w-[280px] sm:w-[320px] flex-shrink-0',
        'transition-colors duration-300',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm sm:text-base font-semibold leading-none text-white">
            {author.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
        {text}
      </p>
    </Card>
  );
}
