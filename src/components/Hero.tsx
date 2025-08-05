import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            SS
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Smit Soni
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
            MCA Student | Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ahmedabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 8128538140</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>smitsoni1093@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/smitsoni1093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/smit-soni-814247212/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;