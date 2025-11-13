import React, { useState } from 'react'

const BackEndSkills = () => {

    const [show,setShow] = useState(true);

    const Cleckskills=()=>{
    setShow(!show);
    };

  return (
    <div>
      <button
        onClick={Cleckskills}
        className="w-full p-3 sm:p-4 rounded-xl transition-all duration-300 text-left bg-gray-50 dark:bg-dark-200 hover:bg-gray-100 dark:hover:bg-dark-200 border border-gray-200 dark:border-gray-700"
        tabindex="0"
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div class="text-green-400 transition-transform duration-300 ">
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
              className="lucide lucide-server w-8 h-8"
              aria-hidden="true"
            >
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
              <line x1="6" x2="6.01" y1="6" y2="6"></line>
              <line x1="6" x2="6.01" y1="18" y2="18"></line>
            </svg>
          </div>
          <span className="font-semibold text-black text-sm sm:text-base">
            Backend
          </span>
        </div>
       <span className='text-green-500'>{show ? "Hide Details":"Show Details"}</span> 
      </button>

      {show &&(
      <div className="p-4  mt-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-100 shadow-xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl
                  
                  from-green-500/20 to-emerald-500/20 flex items-center justify-center"
          >
            <div className="text-green-400">
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
                className="lucide lucide-server w-8 h-8"
                aria-hidden="true"
              >
                <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
                <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
                <line x1="6" x2="6.01" y1="6" y2="6"></line>
                <line x1="6" x2="6.01" y1="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-black sm:text-2xl font-bold font-urbanist">
              Backend
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              skills mastered
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-cpu w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M12 20v2"></path>
                    <path d="M12 2v2"></path>
                    <path d="M17 20v2"></path>
                    <path d="M17 2v2"></path>
                    <path d="M2 12h2"></path>
                    <path d="M2 17h2"></path>
                    <path d="M2 7h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="M20 17h2"></path>
                    <path d="M20 7h2"></path>
                    <path d="M7 20v2"></path>
                    <path d="M7 2v2"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                  </svg>
                </div>
                <span className="font-semibold text-black text-sm sm:text-base">
                  Node.js
                </span>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
              <div className="h-full  from-green-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-cpu w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M12 20v2"></path>
                    <path d="M12 2v2"></path>
                    <path d="M17 20v2"></path>
                    <path d="M17 2v2"></path>
                    <path d="M2 12h2"></path>
                    <path d="M2 17h2"></path>
                    <path d="M2 7h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="M20 17h2"></path>
                    <path d="M20 7h2"></path>
                    <path d="M7 20v2"></path>
                    <path d="M7 2v2"></path>
                    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                  </svg>
                </div>
                <span className="font-semibold text-black text-sm sm:text-base">
                  Express.js
                </span>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
              <div className="h-full  from-green-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-green-500 group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-database w-6 h-6"
                    aria-hidden="true"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                  </svg>
                </div>
                <span className="font-semibold text-black text-sm sm:text-base">
                  MongoDB
                </span>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
              <div className="h-full from-green-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default BackEndSkills