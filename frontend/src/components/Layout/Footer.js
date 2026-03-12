import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_1656f242-b31d-4d9c-afe3-e0ace3c147eb/artifacts/lv38agrs_photo_2026-03-11_22-00-53.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 px-4">
      <div className="max-w-6xl mx-auto py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#home">
              <img 
                src={LOGO_URL} 
                alt="Fesa Global" 
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </a>
            <p className="mt-4 sm:mt-6 text-gray-500 text-xs sm:text-sm leading-relaxed">
              Connecting global experts with trusted employers.
            </p>
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-6">Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Services', 'Regions', 'About', 'Stories'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Healthcare', 'CV Prep', 'Coaching', 'Relocation'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@fesaglobal.com" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors break-all">
                  info@fesaglobal.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+919744377949" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors">
                  +91 97443 77949
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-xs sm:text-sm">
                  328/3, Prince Building,<br />
                  Near St Goretti School,<br />
                  Punalur, India, 691305
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs sm:text-sm">
            © {currentYear} Fesa Global. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            {['Privacy', 'Terms'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-600 hover:text-gray-400 text-xs sm:text-sm transition-colors"
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
