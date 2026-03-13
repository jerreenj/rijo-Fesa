import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@fesaglobal.in&subject=Consultation Request from ${formData.name}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
    toast.success('Opening email client...');
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-black relative px-4" data-testid="contact-section">
      <Toaster position="top-center" toastOptions={{ style: { background: '#1a1a1a', color: '#fff', border: '1px solid #333' } }} />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Contact</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
              Let's Start a
              <br />
              <span className="text-gray-500">Conversation</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Ready to take the next step? Get in touch and let's discuss your opportunities.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs sm:text-sm">Email</div>
                  <a href="mailto:info@fesaglobal.in" className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors">
                    info@fesaglobal.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs sm:text-sm">Phone</div>
                  <a href="tel:+919744377949" className="text-white text-sm sm:text-base hover:text-gray-300 transition-colors">
                    +91 97443 77949
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs sm:text-sm">Location</div>
                  <div className="text-white text-sm sm:text-base">
                    328/3, Prince Building,<br />
                    Near St Goretti School Punalur,<br />
                    Punalur, India, 691305
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919744377949"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 mt-8 sm:mt-10 px-5 sm:px-6 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all text-sm sm:text-base"
            >
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
              Message on WhatsApp
            </a>
          </div>

          {/* Right - Form */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-gray-400 text-xs sm:text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs sm:text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs sm:text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs sm:text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your career goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl py-3 px-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-all text-sm sm:text-base"
              >
                Send Message
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
