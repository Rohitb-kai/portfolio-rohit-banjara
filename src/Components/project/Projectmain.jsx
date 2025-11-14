import React from 'react'
import ProjectFullStack from './ProjectFullStack.jsx';
import ProjectDataAnlysics from './ProjectDataAnlysics.jsx';

const Projectmain = ({ filter = 'all' }) => {
  // show components based on filter
  const showFull = filter === 'all' || filter === 'fullstack';
  const showData = filter === 'all' || filter === 'data';

  return (
    <div>
      <div className="grid grid-cols-1 mx-5 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
        {showFull && <ProjectFullStack />}
        {showData && <ProjectDataAnlysics />}
      </div>
    </div>
  );
}

export default Projectmain