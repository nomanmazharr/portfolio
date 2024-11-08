"use client"; // Ensures this is a client component

import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.hackathon_name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div className="text-white text-sm">
          <div className="mb-2">
            <strong className="text-pink-400">Product: </strong>
            <span>{project.name}</span>
          </div>
          <div className="mb-2">
            <strong className="text-pink-400">Role: </strong>
            <span>{project.role}</span>
          </div>
          <div className="mb-2">
            <strong className="text-pink-400">Description: </strong>
            <span>{project.description}</span>
          </div>
          <div className="mb-2">
            <strong className="text-pink-400">Technologies Used: </strong>
            <span className="text-cyan-400">[{project.tools.join(", ")}]</span>
          </div>

          {/* Links Section */}
            <p className="text-white text-sm">
              <strong className="text-pink-400">GitHub: </strong>
              <a 
                href={project.code} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline"
              >
                {project.code}
              </a>
            </p>
            <p className="text-white text-sm">
              <strong className="text-pink-400">Demo: </strong>
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline"
              >
                {project.demo}
              </a>
            </p>
            <p className="text-white text-sm">
              <strong className="text-pink-400">Hackathon Submission: </strong>
              <a 
                href={project.hackathon_submission_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline"
              >
                Visit Submission
              </a>
            </p>
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;
