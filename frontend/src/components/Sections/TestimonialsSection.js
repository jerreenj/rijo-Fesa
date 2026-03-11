import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Upload, Loader2, User } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const initialTestimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    location: 'Now in Germany',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    quote: 'FesaGlobal made my dream of working in Europe a reality. Their guidance was invaluable.'
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
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newTestimonial = {
        id: Date.now(),
        ...formData,
        image: previewImage || null
      };

      setTestimonials(prev => [...prev, newTestimonial]);
      setActiveIndex(testimonials.length);
      setFormData({ name: '', role: '', location: '', quote: '' });
      setPreviewImage(null);
      setShowForm(false);
      setIsSubmitting(false);
      toast.success('Thank you for sharing your story!');
    }, 1000);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-black relative px-4" data-testid="testimonials-section">
      <Toaster position="top-center" toastOptions={{ style: { background: '#1a1a1a', color: '#fff', border: '1px solid #333' } }} />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4">
              Real <span className="text-gray-500">Stories</span>
            </h2>
          </div>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/5 border border-white/10 text-white text-sm rounded-full hover:bg-white/10 transition-all self-start sm:self-auto"
          >
            {showForm ? 'View Stories' : 'Share Your Story'}
          </button>
        </div>

        {showForm ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">Share Your Success Story</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors overflow-hidden flex-shrink-0"
                  >
                    {previewImage ? (
                      <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-gray-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm sm:text-base">Upload photo</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Optional • Max 5MB</p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs sm:text-sm mb-2">Your Role *</label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      required
                      placeholder="Nurse, Doctor, etc."
                      className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs sm:text-sm mb-2">Current Location *</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    placeholder="Now working in Germany"
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs sm:text-sm mb-2">Your Story *</label>
                  <textarea
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    required
                    rows={4}
                    placeholder="Share your experience..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <><Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" /> Submitting...</>
                  ) : (
                    'Submit Your Story'
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 sm:h-12 sm:w-12 text-white/5" />
              
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 pt-4">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                  {testimonials[activeIndex]?.image ? (
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/5 flex items-center justify-center">
                      <User className="h-8 w-8 sm:h-12 sm:w-12 text-gray-600" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <blockquote className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                    "{testimonials[activeIndex]?.quote}"
                  </blockquote>
                  
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">{testimonials[activeIndex]?.name}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">{testimonials[activeIndex]?.role}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{testimonials[activeIndex]?.location}</div>
                  </div>
                </div>
              </div>

              {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <button
                    onClick={prev}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                  
                  <div className="flex gap-1.5 sm:gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeIndex === i ? 'w-6 sm:w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={next}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
