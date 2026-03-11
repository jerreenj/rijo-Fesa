import React, { useState } from 'react';
import Button from '../UI/Button';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}

Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();
    
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rjassociateskerala@gmail.com&subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoUrl, '_blank');
    
    setFormData({
      name: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    toast.success('Opening Gmail...');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-black" data-testid="contact-section">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400">
            Ready to take the next step in your career? Have questions about our services? 
            Send us an email and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 h-full transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      data-testid="contact-name-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      data-testid="contact-phone-input"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    data-testid="contact-subject-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                    data-testid="contact-message-input"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Continue in Gmail
                </Button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 h-full transform hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-blue-600/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Email Us</h4>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=rjassociateskerala@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors block mt-2"
                    >
                      rjassociateskerala@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-blue-600/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Call Us</h4>
                    <a 
                      href="tel:+919744977949"
                      className="text-blue-400 hover:text-blue-300 transition-colors block mt-2"
                    >
                      +91 97449 77949
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-blue-600/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium">Visit Our Office</h4>
                    <p className="text-white mt-2">
                      527/1, Padippurayil Building<br />
                      Kuthirachira<br />
                      Punalur<br />
                      Kollam<br />
                      Kerala<br />
                      691305
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
