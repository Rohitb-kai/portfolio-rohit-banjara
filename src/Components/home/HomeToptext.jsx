import React, { useEffect, useState } from 'react'

const HomeToptext = () => {
  const [text, setText] = useState('');
  const fullPhrase = 'Full Stack Developer | Data Analyst | Master in Information Technology';
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % 1; // We only have one phrase now
    let fullText = fullPhrase;
    
    if (isDeleting) {
      setText(prev => prev.slice(0, -1));
      setDelta(50); // Faster deletion
      
      if (text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150); // Reset typing speed
      }
    } else {
      setText(fullText.slice(0, text.length + 1));
      setDelta(150); // Consistent typing speed
      
      if (text === fullText) {
        setIsDeleting(true);
        setDelta(3000); // Long pause before starting to delete
      }
    }
  };

  return (
    <div>
      <div className="text-center px-4 w-full max-w-4xl mx-auto">
       <h1 className="text-2xl mt-24 z-10 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 font-urbanist leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600  drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]"> Rohit Banjara</h1> 
      </div>

      <div className="h-[8vh] top-1 w-screen relative text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-5 sm:mb-8 font-inter min-h-2 sm:min-h-2.5 flex items-center justify-center px-2">
        <span className="relative font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
          {text}
          <span className="ml-1 inline-block animate-pulse text-blue-500 border-r-2 border-blue-500 h-8">
          </span>
        </span>
      </div>

      <div className="h-[15vh] sm:h-2 top-1 w-screen relative bg-gradient-to-b dark:from-transparent dark:to-gray-900/20">
              <p className="text-sm sm:text-base md:text-lg text-white dark:text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-inter px-4 leading-relaxed animate-fade-in">
                Passionate about creating innovative solutions and turning data into
                actionable insights. Building the future with code and creativity.
              </p>
      </div>

      <div className="h-20 sm:min-[h-28] sm:w-full sm:bg-transparent">
      </div>

    </div>
  )
}

export default HomeToptext