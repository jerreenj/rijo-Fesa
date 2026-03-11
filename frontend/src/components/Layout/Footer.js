import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import Logo from '../UI/Logo';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <Logo />
            <p className="text-gray-400 mt-4">
              Connecting talented professionals with exceptional career opportunities in Europe and beyond.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/share/1C8WZGULmi/?mibextid=qi2Omg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                data-testid="facebook-link"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/rjass.ociates/profilecard/?igsh=anFvcm1ybDF6bjYy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                data-testid="instagram-link"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors inline-block">Home</a>
              </li>
              <li>
                <a href="#regions" className="text-gray-400 hover:text-white transition-colors inline-block">Regions</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors inline-block">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors inline-block">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors inline-block">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors inline-block">Healthcare Recruitment</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors inline-block">CV Preparation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors inline-block">Interview Coaching</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors inline-block">Relocation Support</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} RJ Associates. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
