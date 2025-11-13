import React from "react";
import Video from "../Components/home/video";
import img12 from "../assets/img1.jpg";
import HomeButton from "../Components/home/HomeButton";
import Homeicone from "../Components/home/Homeicone";
import HomeToptext from "../Components/home/HomeToptext";


const Home = () => {
 
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className='absolute inset-0 z-0 w-full h-full'
        style={{ backgroundImage: `url(${img12})` }}
      >
        <div className="absolute inset-0 w-full h-full object-cover">
          <Video className="w-full h-full object-cover filter brightness-90 contrast-110 transform-none will-change-transform will-change-opacity opacity-100" />
        </div>
      </div>
      
      <div className='relative z-10 flex flex-col items-center justify-center h-full w-full'>
        <HomeToptext />
        <HomeButton />
        <Homeicone />
      </div>
    </div>
  );
};

export default Home;
