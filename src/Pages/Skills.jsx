import React from 'react'
import TopSkill from '../Components/Skills/TopSkill.jsx'
import FrontEndSkills from '../Components/Skills/FrontEndSkills.jsx'
import BackEndSkills from '../Components/Skills/BackEndSkills.jsx'
import DataAnalytics from '../Components/Skills/DataAnalytics.jsx'

const Skills = () => {
  return (
    <div>
      <div className="mt-10 pt-20">
        <div className="w-full mx-auto px-1">
          <TopSkill />

          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-dark-100 shadow-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 gradient-text font-urbanist">
              Select Profile
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <FrontEndSkills />
              <BackEndSkills />
              <DataAnalytics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills