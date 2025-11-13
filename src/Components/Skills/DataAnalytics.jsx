import React, { useState } from "react";

const DataAnalytics = () => {

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
          <div className="text-purple-400 transition-transform duration-300 ">
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
              className="lucide lucide-brain w-8 h-8"
              aria-hidden="true"
            >
              <path d="M12 18V5"></path>
              <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
              <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
              <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
              <path d="M18 18a4 4 0 0 0 2-7.464"></path>
              <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
              <path d="M6 18a4 4 0 0 1-2-7.464"></path>
              <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
            </svg>
          </div>
          <span className="font-semibold text-black text-sm sm:text-base">
            Data Analytics
          </span>
        </div>
       <span className='text-purple-500'>{show ? "Hide Details":"Show Details"}</span> 
      </button>
      
  {show &&(
  <div className="p-4 mt-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-100 shadow-xl border border-gray-100 dark:border-gray-700">
        <div
          className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl  from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
            <div className="text-cyan-400">
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
                className="lucide lucide-chart-column w-8 h-8"
                aria-hidden="true"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-black font-urbanist">
              Data Analytics
            </h3>
            <p className="text-sm sm:text-base text-gray-500">skills mastered</p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          <div
            className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-chart-column w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <span className="font-semibold text-black text-sm sm:text-base">Tableau</span>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
              <div
                className="h-full from-cyan-500 to-blue-500 rounded-full"
              ></div>
            </div>
          </div>
          <div
            className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-yellow-500 group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-chart-column w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <span className="font-semibold text-black text-sm sm:text-base">Power BI</span>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
              <div
                className="h-full  from-cyan-500 to-blue-500 rounded-full"
              ></div>
            </div>
          </div>
          <div
            className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-green-600 group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-chart-column w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <span className="font-semibold text-black text-sm sm:text-base">Excel</span>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
              <div
                className="h-full from-cyan-500 to-blue-500 rounded-full"
              ></div>
            </div>
          </div>
          <div
            className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
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
                    className="lucide lucide-chart-column w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
                <span className="font-semibold text-black text-sm sm:text-base">
                  Matplotlib
                </span>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full from-cyan-500 to-blue-500 rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
     )}
    </div>
  );
};

export default DataAnalytics;
