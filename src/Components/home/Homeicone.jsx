import React from 'react'

const Homeicone = () => {
  return (
    <div>
      <div className="flex h-15 w-100 ml-116 items-center justify-center space-x-3sm:space-x-4 md:space-x-6 flex-wrap gap-3 sm:gap-4">
        <div className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group">
          <a
            href="https://www.linkedin.com/in/rohit-banjara-5552212b8"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex="0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin w-5 h-5 sm:w-6 sm:h-6 group-hover:text-sky-500 transition-colors"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>

        <div className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-white dark:text-gray-200 hover:bg-white/20 transition-all duration-300 group">
          <a
            href="mailto:banjararohit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex="0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail  w-5 h-5 sm:w-6 sm:h-6 group-hover:text-orange-500 transition-colors"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
          </a>
        </div>

        <div className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 dark:border-gray-700 text-white dark:text-gray-200 hover:bg-white/20 transition-all duration-300 group">
          <a
            href="https://wa.me/919887101736"
            target="_blank"
            rel="noopener noreferrer"
            tabindex="0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle w-5 h-5 sm:w-6 sm:h-6 group-hover:text-green-400 transition-colors"
              aria-hidden="true"
            >
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homeicone