import React from 'react';
import { Users, Award, Clock, Briefcase } from 'lucide-react';
import Button from '../UI/Button';

const StatItem = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center mb-3 hover:bg-blue-600/20 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black" data-testid="about-section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team meeting" 
                  className="w-full h-auto hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 z-0 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 z-0 animate-pulse"></div>
              
              {/* Stats */}
              <div className="absolute -bottom-10 -right-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-xl border border-gray-700 z-20 transform hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <StatItem 
                    icon={<Users className="h-6 w-6 text-blue-500" />}
                    value="100+"
                    label="Professionals Placed"
                  />
                  <StatItem 
                    icon={<Briefcase className="h-6 w-6 text-blue-500" />}
                    value="35+"
                    label="Partner Companies"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About RJ Associates</h2>
            
            <p className="text-gray-300 mb-6">
              Founded in 2023, RJ Associates has quickly grown to become a leading recruitment agency specializing in
              connecting talented professionals with exceptional career opportunities across Europe.
            </p>
            
            <p className="text-gray-300 mb-8">
              Our team of experienced recruiters brings industry-specific knowledge and a personalized
              approach to every placement. We pride ourselves on understanding both our clients' needs
              and our candidates' aspirations, creating perfect matches that drive success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="mr-4 mt-1">
                  <Award className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Excellence</h3>
                  <p className="text-gray-400 text-sm">
                    We maintain the highest standards in every aspect of our service.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="mr-4 mt-1">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Client-Focused</h3>
                  <p className="text-gray-400 text-sm">
                    Your success is our priority. We build lasting relationships.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="mr-4 mt-1">
                  <Briefcase className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Expertise</h3>
                  <p className="text-gray-400 text-sm">
                    Specialized knowledge in healthcare sector.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="mr-4 mt-1">
                  <Clock className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Efficiency</h3>
                  <p className="text-gray-400 text-sm">
                    We value your time with streamlined, effective processes.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="primary">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
