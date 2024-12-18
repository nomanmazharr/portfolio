// @flow strict

import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ project }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={project?.cover_image}
          height={1080}
          width={1920}
          alt={project.title}
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center">
          <Link href={project.link}>
            <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
              {project.title}
            </p>
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-white bg-gradient-to-r from-pink-500 to-violet-600 rounded-full hover:bg-violet-700 transition duration-300"
            >
              Code
            </a>
          )}
        </div>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
