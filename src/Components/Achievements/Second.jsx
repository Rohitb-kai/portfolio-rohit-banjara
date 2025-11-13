import React from "react";

const Second = () => {
  return (
    <div>
      <div className="grid grid-cols-2  md:grid-cols-2 gap-2 mb-16">

        <div className="p-6 rounded-xl text-center ml-4 mr-7 card-hover bg-gray-50 dark:bg-dark-100 shadow-lg border border-gray-100 dark:border-gray-700">
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
            class="lucide lucide-file-text w-8 h-8 text-blue-400 mx-auto mb-3"
            aria-hidden="true"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
          </svg>
          <div className="text-2xl font-bold text-blue-400 dark:text-blue-300 mb-1">4</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Certifications</div>
        </div>

        <div
          className="p-6 rounded-xl text-center ml-7 mr-4 card-hover bg-gray-50 dark:bg-dark-100 shadow-lg border border-gray-100 dark:border-gray-700"
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
            className="lucide lucide-star w-8 h-8 text-pink-400 mx-auto mb-3"
            aria-hidden="true"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
          <div className="text-2xl font-bold text-pink-400 dark:text-pink-300 mb-1">1</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Special Awards</div>
        </div>

      </div>
    </div>
  );
};

export default Second;
