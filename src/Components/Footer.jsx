import React from 'react'
import Skills from '../Pages/Skills.jsx';
import About from '../Pages/About.jsx';
import Projects from '../Pages/Projects.jsx';
import Achievements from '../Pages/Achievements.jsx';
import { Contact } from 'lucide-react';

const Footer = () => {
  return (
    <div className="py-12  dark:bg-dark-100 border-t dark:border-gray-700">
        <div className="container-custom px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 gradient-text">
                Contact Info
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail w-4 h-4 sm:w-5 sm:h-5 text-neon-purple"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  <span className="text-xs sm:text-sm break-all">
                    banjararohit9887gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-phone w-4 h-4 sm:w-5 sm:h-5 text-neon-cyan"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span className="text-xs sm:text-sm">+91 9887101736 </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-xs sm:text-sm">
                    Jaipur, Rajasthan, India
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 gradient-text">
                Quick Links
              </h3>
              <div className="space-y-1.5 sm:space-y-2">
                <a
                  href= "About"
                  className="block text-xs sm:text-sm hover:text-neon-purple transition-colors"
                >
                  About
                </a>
                <a
                  href= "Skills"
                  className="block text-xs sm:text-sm hover:text-neon-purple transition-colors"
                >
                  Skills
                </a>
                <a
                  href= "Projects"
                  className="block text-xs sm:text-sm hover:text-neon-purple transition-colors"
                >
                  Projects
                </a>
                <a
                  href= "Achievements"
                  className="block text-xs sm:text-sm hover:text-neon-purple transition-colors"
                >
                  Achievements
                </a>
                <a
                  href= "Contact"
                  className="block text-xs sm:text-sm hover:text-neon-purple transition-colors"
                >
                  Contact
                </a>
                
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 gradient-text">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {/* Linkedin path */}
                <a
                  href="https://www.linkedin.com/in/rohit-banjara-5552212b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm hover:text-neon-cyan transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-white/5 dark:hover:bg-dark-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                {/* github path */}
                <a
                  href="https://github.com/Rohitb-kai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm hover:text-neon-cyan transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-white/5 dark:hover:bg-dark-200"
                  tabindex="0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-github w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 sm:pt-8 border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-400 italic">
                  Always moving forward
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer