import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

interface ProjectDetailsProps {
  image: string | null;
  title: string;
  description: string | null;
  liveLink: string | null;
  githubLink: string | null;
  techStack: string | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  image,
  description,
  liveLink,
  githubLink,
  techStack,
}) => {
  return (
    <div className="text-white/85 shadow-lg dark:bg-[#121125] pt-[4rem] pb-[4rem] md:pt-[6rem]">
      <motion.h2
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.3 }}
        className="heading !capitalize pb-[4rem] md:pb-[2rem]"
      >
        {title.split(' ')[0]}
        <span className="text-orange-400 pl-2">{title.split(' ')[1]}</span>
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[90%] w-[80%] mx-auto gap-[3rem] justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.5, type: 'keyframes', delay: 0.4 }}
          className=" w-full lg:border-r-2  border-[#55e6a5] flex items-center justify-center lg:justify-start"
        >
          <div className="lg:h-[500px] lg:w-[95%] md:pr-[1rem] md:w-[80%] mt-[2rem] lg:mt-0 w-[90%] h-auto relative">
            <Image
              src={image !== null ? image : ''}
              alt="project"
              width={400}
              height={400}
              className="relative w-[100%] shadow-lg h-[100%] object-contain"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5, type: 'keyframes', delay: 0.4 }}
          className="flex mx-auto lg:pl-[1rem] lg:mx-0 lg:justify-start flex-col"
        >
          <div className="mb-[1rem] flex justify-center lg:justify-start items-center md:space-x-10">
            <p className="text-[20px] text-slate-700 dark:text-slate-100 w-[90%]">
              {description !== null && description}
            </p>
          </div>
          <div className="mb-[3rem] flex justify-center lg:justify-start items-center space-x-2 text-[20px]">
            <span className="text-orange-400 text-[18px] font-semibold">
              Tech :{' '}
            </span>
            <span className="text-slate-800 dark:text-slate-50">
              {techStack !== null && techStack}
            </span>
          </div>
          <div className="mt-[1rem] flex flex-col 500px:flex-row items-center justify-between gap-6">
            {liveLink !== null && (
              <Link
                href={`${liveLink}`}
                className="px-[2rem] hover:text-orange-400 w-[200px] border border-orange-300 transition-all py-[1rem] duration-200 text-[20px] font-bold
                              flex items-center justify-center text-black dark:text-white space-x-2"
              >
                <p>Live</p>
                <MdArrowOutward className="h-[1.7rem] w-[1.6rem]" />
              </Link>
            )}
            {githubLink !== null && (
              <Link
                href={`${githubLink}`}
                className="px-[2rem] hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex items-center text-black bg-blue-300 space-x-2 w-[200px] justify-center"
              >
                <FaGithub className="h-[1.7rem] w-[1.6rem]" />
                <p>Github</p>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
