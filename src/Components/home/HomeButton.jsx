import React from 'react'
import DownloadCV from '../DownloadCV'

const HomeButton = () => {
  return (
    <div>
      <div className="h-[10vh]  lg:mt-4 flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center mb-16 sm:mb-10 md:mb-12 px-4">

        <a
        href= 'Projects'
        target=''
        className="text-sm text-white bg-purple-700 dark:bg-purple-600 border-2 border-purple-700 dark:border-purple-600 hover:bg-purple-800 dark:hover:bg-purple-700 rounded-2xl sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 group w-full sm:w-auto">
          <span>View Projects</span>
        </a>
       <div>
        <DownloadCV/>
       </div>
      </div>
    </div>
  )
}

export default HomeButton