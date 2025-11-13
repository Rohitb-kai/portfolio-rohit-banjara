import React from "react";
import AboutLift from "../Components/about/AboutLift";
import AboutRight from "../Components/about/AboutRight";

const About = () => {
  return (
    <div className="w-full pb-5 pt-4  ">
      <div className="w-full mx-auto px-1 ">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-4 lg:gap-2 items-center w-full">
         {/* first col */}
         <AboutLift/>
          {/* seconed col */}
          <AboutRight/>
        </div>
      </div>
    </div>
  );
};

export default About
