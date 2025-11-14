import React, { useState } from 'react'


const ProjectFullStack  = () => {

  const [showPreview,setShowPreview] =useState(false);
  const [currentIndex,setCurrentIndex] =useState(0);

  const images =[
    "/images/ecomm1.jpg",
    "/images/ecomm2.jpg",
    "/images/ecomm3.jpg",
    "/images/ecomm4.jpg",
    "/images/ecomm5.jpg",
    "/images/ecomm6.jpg",
  ];

  const nextImage =() =>{
    setCurrentIndex((prev)=>(prev+1)%images.length);
  };

  const prevImage =()=>{
    setCurrentIndex((prev)=>
    prev=== 0?images.length-1:prev-1);
  };

  return (
    <div>
      <div className="rounded-xl overflow-hidden card-hover bg-gray-50 dark:bg-dark-100 shadow-lg border border-gray-100 dark:border-gray-700">
        <div>
          <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
            <div className="w-full h-full from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center">
              <div className="text-4xl sm:text-6xl opacity-50">
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
                  className="lucide lucide-code w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button
                className="p-2 sm:p-3 bg-white/20 dark:bg-dark-200 backdrop-blur-sm rounded-full text-white dark:text-gray-200 hover:bg-white/30 dark:hover:bg-dark-300 transition-colors"
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
                  class="lucide lucide-play w-5 h-5 sm:w-6 sm:h-6"
                  aria-hidden="true"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                Full Stack
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 font-urbanist">
              E-Commerce Platform
            </h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-gray-600 dark:text-gray-300">
              Full-stack e-commerce solution with React, Node.js, and MongoDB
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
              <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-200">
                React
              </span>
              <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-200">
                Node.js
              </span>
              <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-200">
                MongoDB
              </span>
              <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-200">
                +3
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPreview(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm font-medium"
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
                    className="lucide lucide-eye w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  Preview
                </button>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Rohitb-kai/Monika-Furniture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  tabIndex="0"
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
                    className="lucide lucide-github w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Code
                </a>
              </div>

              {showPreview && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                  <div className="bg-white dark:bg-gray-500 p-7 rounded-xl relative max-w-2xl w-full">
                    <button
                      onClick={() => setShowPreview(false)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
                    >
                      X
                    </button>
                    <div className="flex items-center justify-center relative">
                      <img
                        src={images[currentIndex]}
                        alt=""
                        className="rounded-lg w-full h-80 object-cover"
                      />
                      <button
                        onClick={prevImage}
                        className="absolute left-0 px-7 text-3xl text-gray-600 hover:text-black"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-code w-5 h-5"
                          aria-hidden="true"
                        >
                          <path d="m16 18 6-6-6-6"></path>
                          <path d="m8 6-6 6 6 6"></path>
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-0 px-7 text-3xl text-gray-500 hover:text-black"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-code w-5 h-5"
                          aria-hidden="true"
                        >
                          <path d="m16 18 6-6-6-6"></path>
                          <path d="m8 6-6 6 6 6"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="text-center text-gray-500 mt-5 text-sm">
                      image{currentIndex + 1} of {images.length}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectFullStack