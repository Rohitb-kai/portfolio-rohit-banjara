import React, { useState } from "react";
import ProjectTop from "../Components/project/ProjectTop";
import ProjectSecond from "../Components/project/ProjectSecond";
import Projectmain from "../Components/project/Projectmain";

const Projects = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <div className="w-full pb-4 mt-10 pt-20">
        <div className="w-full mx-auto px-1">
         <ProjectTop/>
         <ProjectSecond filter={filter} setFilter={setFilter} />
         <Projectmain filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
