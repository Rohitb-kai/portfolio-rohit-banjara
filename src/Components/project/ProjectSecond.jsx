import React from 'react'

const ProjectSecond = ({ filter, setFilter }) => {
  const base = 'px-7 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2';
  const inactive = 'bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-300';
  const active = 'bg-blue-600 text-white';

  return (
    <div>
      <div className="flex flex-wrap justify-center ml-15 gap-5 mb-12">
        <button
          onClick={() => setFilter('all')}
          className={`${base} ${filter === 'all' ? active : inactive}`}
          aria-pressed={filter === 'all'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-globe w-5 h-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          All
        </button>

        <button
          onClick={() => setFilter('fullstack')}
          className={`${base} ${filter === 'fullstack' ? active : inactive}`}
          aria-pressed={filter === 'fullstack'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-code w-5 h-5"
            aria-hidden="true"
          >
            <path d="m16 18 6-6-6-6"></path>
            <path d="m8 6-6 6 6 6"></path>
          </svg>
          Full Stack
        </button>

        <button
          onClick={() => setFilter('data')}
          className={`${base} ${filter === 'data' ? active : inactive}`}
          aria-pressed={filter === 'data'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-database w-5 h-5"
            aria-hidden="true"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
          </svg>
          Data Analysis
        </button>
      </div>
    </div>
  );
}

export default ProjectSecond