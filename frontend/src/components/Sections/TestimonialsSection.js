import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Upload, Loader2, User } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// Initial testimonials (can be added to by users)
const initialTestimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    location: 'Now in Germany',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    quote: 'Fesa Global made my dream of working in Europe a reality. Their guidance was invaluable.'
  },
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    location: '',
    quote: ''
  });

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const newTestimonial = {
        id: Date.now(),
        name: formData.name,
        role: formData.role,
        location: formData.location,
        quote: formData.quote,
        image: previewImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80'
      };

      setTestimonials(prev => [...prev, newTestimonial]);
      setActiveIndex(testimonials.length); // Show the new testimonial
      setFormData({ name: '', role: '', location: '', quote: '' });
      setPreviewImage(null);
      setShowForm(false);
      setIsSubmitting(false);
      toast.success('Thank you for sharing your story!');
    }, 1000);
  };

  return (
    <section id="testimonials" className="py-24 bg-black relative" data-testid="testimonials-section">
      <Toaster position="top-right" toastOptions={{ style: { background: '#1a1a1a', color: '#fff', border: '1px solid #333' } }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Real <span className="text-gray-500">Stories</span>
            </h2>
          </div>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all"
          >
            {showForm ? 'View Stories' : 'Share Your Story'}
          </button>
        </div>

        {showForm ? (
          /* Submit Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Share Your Success Story</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Photo Upload */}
                <div className="flex items-center gap-6">
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-24 h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors overflow-hidden"
                  >
                    {previewImage ? (
                      <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <Upload className="h-8 w-8 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">Upload your photo</p>
                    <p className="text-gray-500 text-sm">Optional • Max 5MB</p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Role *</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      required
                      placeholder="Nurse, Doctor, etc."
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Current Location *</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    placeholder="Now working in Germany"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Your Story *</label>
                  <textarea
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    required
                    rows={4}
                    placeholder="Share your experience with Fesa Global..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Submitting...</>
                  ) : (
                    'Submit Your Story'
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Testimonials Display */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 relative">
              <Quote className="absolute top-8 left-8 h-12 w-12 text-white/5" />
              
              <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                  {testimonials[activeIndex]?.image ? (
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/5 flex items-center justify-center">
                      <User className="h-12 w-12 text-gray-600" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-xl text-gray-300 leading-relaxed mb-6">
                    "{testimonials[activeIndex]?.quote}"
                  </blockquote>
                  
                  <div>
                    <div className="text-white font-semibold">{testimonials[activeIndex]?.name}</div>
                    <div className="text-gray-500 text-sm">{testimonials[activeIndex]?.role}</div>
                    <div className="text-gray-600 text-sm">{testimonials[activeIndex]?.location}</div>
                  </div>
                </div>
              </div>

              {testimonials.length > 1 && (
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
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
