import React from 'react'

const AboutLift = () => {
  return (
    <div>
         <div className="space-y-6 ml-10 mt-10 pt-10 pb-5 w-full ">
            <div>
              <div className="text-3xl text-purple-500 mr-40  border-b-4 not-odd: border-b-purple-500 sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6 font-urbanist">
                <h2 className="mb-6">About Me</h2>
              </div>
              
              <div className="w-16 sm:w-20 h-1 from-neon-purple to-neon-cyan rounded-full mb-6 sm:mb-8"></div>
            </div>
            <div className="space-y-3 mr-20 sm:space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                Hello! I'm
                <span className="text-purple-700"> Rohit Banjara</span>,
                a passionate Full Stack Developer and Data Analysis with a love
                for creating innovative solutions and turning complex data into
                actionable insights.
              </p>
              <p className='dark:bg-blue-600 dark:text-orange-500'>
                With expertise in modern web technologies and data analysis
                tools, I specialize in building scalable applications and
                extracting meaningful patterns from data.
              </p>
              <p>
                exploring new technologies, or working on personal projects that
                challenge my skills.
              </p>
            </div>
            <div className="flex flex-wrap mr-15 gap-6 sm:gap-3 lg:gap-4">
              <span className="px-3 sm:px-4 bg-orange-200  py-1.5 sm:py-2 bg-neon-purple/10 text-neon-purple rounded-full text-xs sm:text-sm font-medium">
                React &amp; Node.js
              </span>
              <span className="px-3 bg-cyan-100 text-cyan-500 sm:px-4 py-1.5 sm:py-2 bg-neon-purple/10  rounded-full text-xs sm:text-sm font-medium">
                Express.js &amp; MongoDB
              </span>
              <span className="px-3 sm:px-4 bg-pink-100 text-pink-500 py-1.5 sm:py-2 bg-neon-cyan/10 text-neon-cyan rounded-full text-xs sm:text-sm font-medium">
                Python &amp; Data Analysis
              </span>
            </div>
          </div>
    </div>
  )
}

export default AboutLift