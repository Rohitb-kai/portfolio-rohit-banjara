import React, { useCallback } from 'react'

const Contectcv = () => {
    const handleDownload = useCallback(() => {
            const url = 'src/assets/cv.pdf';
            const link = document.createElement('a');
            link.href = url;
            // Suggest a filename for the downloaded file
            link.setAttribute('download', 'RohitBanjara.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },[])
  return (
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center justify-center bg-pink-400 space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-xl btn-primary text-sm sm:text-base"
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
                    className="lucide lucide-download w-4 h-4 sm:w-5 sm:h-5"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  <span>Download Resume</span>
                </button>  )
}

export default Contectcv