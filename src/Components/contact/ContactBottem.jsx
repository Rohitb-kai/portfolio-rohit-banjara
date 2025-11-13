import React from 'react'

const ContactBottem = () => {
  return (
    <div> 
         <div className="mt-12 sm:mt-16 text-center px-4 sm:px-6 lg:px-0">
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text font-urbanist">
                Ready to Work Together?
              </h3>
              <p className="text-black text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
                Whether you have a project in mind, need consultation, or just
                want to chat about technology, I'm here to help. Let's turn your
                ideas into reality!
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <span className="px-3 bg-pink-300 text-pink-900 sm:px-4 py-1.5 sm:py-2 bg-neon-purple/10  rounded-full text-xs sm:text-sm font-medium">
                  Available for Freelance
                </span>
                <span className="px-3 bg-green-200 text-green-900 sm:px-4 py-1.5 sm:py-2 bg-neon-cyan/10 text-neon-cyan rounded-full text-xs sm:text-sm font-medium">
                  Open to Full-time Roles
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-400/10 text-yellow-500 rounded-full text-xs sm:text-sm font-medium">
                  Remote &amp; On-site
                </span>
              </div>
            </div>
          </div> 
    </div>
  )
}

export default ContactBottem