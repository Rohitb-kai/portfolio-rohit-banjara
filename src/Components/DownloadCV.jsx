import React, { useCallback } from 'react'

// Recommended: place your PDF in the project's `public/` folder (e.g. public/Rohit_Kumar_Resume.pdf)
// and reference it with a root-relative path: '/Rohit_Kumar_Resume.pdf'
const DownloadCV = () => {
    const handleDownload = useCallback(() => {
        const url = '/images/cv.pdf';
        const link = document.createElement('a');
        link.href = url;
        // Suggest a filename for the downloaded file
        link.setAttribute('download', 'RohitBanjara.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },[])

  return (
        <button onClick={handleDownload} className="btn-primary bg-fuchsia-900 text-white text-sm border-2 border-fuchsia-700 rounded-2xl sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 group w-full sm:w-auto hover:bg-fuchsia-700 hover:text-amber-50">
          <span className='shadow-blue-500 animate-pulse'>Download Resume</span>
        </button>
  )
}

export default DownloadCV