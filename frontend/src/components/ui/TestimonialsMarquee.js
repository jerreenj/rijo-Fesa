import React, { useState, useRef } from 'react';
import { cn } from '../../lib/utils';
import { TestimonialCard } from './TestimonialCard';
import { Plus, Upload, X, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// Initial sample testimonials - these will be replaced as real ones are added
const sampleTestimonials = [
  {
    id: 'sample-1',
    isSample: true,
    author: {
      name: 'Dr. Sarah Johnson',
      handle: 'Cardiologist • Germany',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    text: 'FesaGlobal made my dream of working in Europe a reality. Their guidance throughout the process was invaluable.'
  },
  {
    id: 'sample-2',
    isSample: true,
    author: {
      name: 'Maria Rodriguez',
      handle: 'ICU Nurse • United Kingdom',
      avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face'
    },
    text: 'The team went above and beyond to help me relocate. From CV preparation to interview coaching, they supported me every step.'
  },
  {
    id: 'sample-3',
    isSample: true,
    author: {
      name: 'James Wilson',
      handle: 'Physiotherapist • Ireland',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    text: 'I was skeptical at first, but FesaGlobal proved their worth. They understood my career goals perfectly.'
  },
  {
    id: 'sample-4',
    isSample: true,
    author: {
      name: 'Priya Sharma',
      handle: 'Dental Surgeon • Netherlands',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    text: 'Professional, efficient, and truly caring about their candidates. The whole process was smooth and well-organized.'
  },
  {
    id: 'sample-5',
    isSample: true,
    author: {
      name: 'Ahmed Hassan',
      handle: 'General Practitioner • Sweden',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
    },
    text: 'FesaGlobal helped me navigate the complex process of medical license recognition. Now I am living my dream.'
  },
];

export function TestimonialsMarquee({ 
  title,
  description,
  className 
}) {
  const [testimonials, setTestimonials] = useState(sampleTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    location: '',
    text: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newTestimonial = {
        id: `real-${Date.now()}`,
        isSample: false,
        author: {
          name: formData.name,
          handle: `${formData.role} • ${formData.location}`,
          avatar: previewImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
        },
        text: formData.text
      };

      // Add new testimonial and remove one sample if there are still samples
      setTestimonials(prev => {
        const sampleCount = prev.filter(t => t.isSample).length;
        if (sampleCount > 0) {
          // Remove one sample testimonial
          const firstSampleIndex = prev.findIndex(t => t.isSample);
          const newList = [...prev];
          newList.splice(firstSampleIndex, 1);
          return [newTestimonial, ...newList];
        }
        return [newTestimonial, ...prev];
      });

      setFormData({ name: '', role: '', location: '', text: '' });
      setPreviewImage(null);
      setShowForm(false);
      setIsSubmitting(false);
      toast.success('Thank you for sharing your story!');
    }, 1000);
  };

  // Get testimonials for continuous marquee (duplicate for seamless loop)
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className={cn(
      'bg-black text-white',
      'py-16 sm:py-24 px-0 overflow-hidden',
      className
    )}>
      <Toaster position="top-center" toastOptions={{ style: { background: '#1a1a1a', color: '#fff', border: '1px solid #333' } }} />
      
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:gap-10 px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h2 className="max-w-[720px] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            {title}
          </h2>
          <p className="text-base sm:text-lg max-w-[600px] text-gray-400">
            {description}
          </p>
          
          {/* Add Story Button */}
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all text-sm"
          >
            <Plus className="h-4 w-4" />
            Share Your Story
          </button>
        </div>

        {/* Continuous Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {marqueeTestimonials.map((testimonial, i) => (
              <TestimonialCard 
                key={`${testimonial.id}-${i}`}
                author={testimonial.author}
                text={testimonial.text}
              />
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>

      {/* Add Story Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Share Your Story</h3>
              <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Photo Upload */}
              <div className="flex items-center gap-4">
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors overflow-hidden flex-shrink-0"
                >
                  {previewImage ? (
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <Upload className="h-5 w-5 text-gray-500" />
                  )}
                </div>
                <div>
                  <p className="text-white text-sm">Upload photo</p>
                  <p className="text-gray-500 text-xs">Optional</p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-1.5">Your Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Role *</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                    placeholder="Nurse"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Location *</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    placeholder="Germany"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-1.5">Your Story *</label>
                <textarea
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  required
                  rows={3}
                  placeholder="Share your experience with FesaGlobal..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 px-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
                ) : (
                  'Submit Story'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
