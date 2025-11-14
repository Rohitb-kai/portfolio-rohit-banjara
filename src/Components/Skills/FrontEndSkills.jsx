import React, { useState } from 'react'



const FrontEndSkills = () => {

  const [show,setShow] = useState(true);


const Cleckskills=()=>{
  setShow(!show);
};
  
  return (
    <div>
      <button
      onClick={Cleckskills}
        className="w-full p-3 sm:p-4 rounded-xl transition-all duration-300 text-left bg-gray-50 dark:bg-dark-200 hover:bg-gray-100 dark:hover:bg-dark-200 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center space-x-2 sm:space-x-3 group-hover:border-b-blue-600">
          <div className="text-blue-400 transition-transform duration-300 ">
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
              className="lucide lucide-code w-8 h-8"
              aria-hidden="true"
            >
              <path d="m16 18 6-6-6-6"></path>
              <path d="m8 6-6 6 6 6"></path>
            </svg>
          </div>
          <span className="font-semibold text-black text-sm sm:text-base">Frontend</span>
        </div>
       <span className='text-blue-500'>{show ? "Hide Details":"Show Details"}</span> 
      </button>

  {show &&(
  <div className="lg:col-span-2 w-full">
  <div className="p-4 mt-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-dark-100 shadow-xl border border-gray-100 dark:border-gray-700">
          <div
            className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
              <div className="text-blue-400">
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
                  className="lucide lucide-code w-8 h-8"
                  aria-hidden="true"
                >
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black font-urbanist">
                Frontend
              </h3>
              <p className="text-sm sm:text-base text-gray-500">
                skills mastered
              </p>
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
                      className="lucide lucide-code w-6 h-6"
                      aria-hidden="true"
                    >
                      <path d="m16 18 6-6-6-6"></path>
                      <path d="m8 6-6 6 6 6"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-black text-sm sm:text-base">React</span>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
                <div
                  className="h-full from-blue-500 to-cyan-500 rounded-full"
                ></div>
              </div>
            </div>
            <div
            className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="text-orange-400 group-hover:scale-110 transition-transform duration-300">
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
                      className="lucide lucide-globe w-6 h-6"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-black text-sm sm:text-base">
                    HTML/CSS
                  </span>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
                <div
                  className="h-ful from-blue-500 to-cyan-500 rounded-full"
                ></div>
              </div>
            </div>
           
            <div
            className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 dark:bg-dark-200 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
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
                      className="lucide lucide-layers w-6 h-6"
                      aria-hidden="true"
                    >
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-black text-sm sm:text-base">
                    Tailwind CSS
                  </span>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-dark-200 overflow-hidden">
                <div
                  className="h-full from-blue-500 to-cyan-500 rounded-full"
                ></div>
              </div>
            </div>
            <div
              className="p-3 sm:p-4 rounded-xl card-hover group bg-gray-50 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">
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
                      className="lucide lucide-code w-6 h-6"
                      aria-hidden="true"
                    >
                      <path d="m16 18 6-6-6-6"></path>
                      <path d="m8 6-6 6 6 6"></path>
                    </svg>
                  </div>
                  <span className="font-semibold text-black text-sm sm:text-base">
                    JavaScript
                  </span>
                </div>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full from-blue-500 to-cyan-500 rounded-full"
                ></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default FrontEndSkills