import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../UI/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              Connecting exceptional talent with world-class opportunities across Europe and beyond.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Regions', 'About', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Healthcare Recruitment', 'CV Preparation', 'Interview Coaching', 'Relocation Support', 'Visa Assistance'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gray-500 mt-1" />
                <a href="mailto:info@fesaglobal.com" className="text-gray-500 hover:text-white text-sm transition-colors">
                  info@fesaglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gray-500 mt-1" />
                <a href="tel:+919744977949" className="text-gray-500 hover:text-white text-sm transition-colors">
                  +91 97449 77949
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gray-500 mt-1" />
                <span className="text-gray-500 text-sm">
                  Kollam, Kerala, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Fesa Global. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
