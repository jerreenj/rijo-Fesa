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
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@fesaglobal.com&subject=Consultation Request from ${formData.name}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
    toast.success('Opening email client...');
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 bg-black relative" data-testid="contact-section">
      <Toaster position="top-right" toastOptions={{ style: { background: '#1a1a1a', color: '#fff', border: '1px solid #333' } }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Let's Start a
              <br />
              <span className="text-gray-500">Conversation</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10">
              Ready to take the next step in your career? Get in touch with our team and let's discuss your opportunities.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'info@fesaglobal.com', href: 'mailto:info@fesaglobal.com' },
                { icon: Phone, label: 'Phone', value: '+91 97449 77949', href: 'tel:+919744977949' },
                { icon: MapPin, label: 'Location', value: 'Kollam, Kerala, India' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <item.icon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-gray-300 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919744377949"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all"
            >
              <Send className="h-5 w-5" />
              Message us on WhatsApp
            </a>
          </div>

          {/* Right - Form */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                    data-testid="contact-email-input"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors"
                  data-testid="contact-phone-input"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your career goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/20 transition-colors resize-none"
                  data-testid="contact-message-input"
                />
              </div>
              
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-all"
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
