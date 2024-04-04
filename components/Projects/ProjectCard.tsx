import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  src: string;
  description: string;
  LiveLink: string;
  githubLink: string;
  delay: number;
  enabled: boolean;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  src,
  description,
  delay,
  githubLink,
  LiveLink,
  enabled,
  techStack,
}) => {
  const encodedGithubLink = encodeURIComponent(githubLink);
  const encodedLiveLink = encodeURIComponent(LiveLink);
  const encodedTechStack = encodeURIComponent(techStack.join(','));

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.5, type: 'keyframes', delay: delay }}
      className="border rounded-lg cursor-pointer relative bg-blue-50 dark:bg-slate-900 border-slate-500 hover:scale-110 transition-all duration-200"
    >
      <Link
        href={`/project/${encodeURIComponent(
          title,
        )}?image=${src}&description=${description}&github=${encodedGithubLink}&live=${encodedLiveLink}&techStack=${encodedTechStack}`}
      >
        <div
          className="relative
                 h-[250px] 500px:h-[300px]"
        >
          <Image
            src={src}
            alt="portfolio"
            layout="fill"
            className="object-cover rounded-t-lg"
          />
        </div>
        <h2 className="bg-gradient-to-r bg-clip-text text-transparent pt-5 text-center from-blue-500 to-[#55e6a5] font-bold text-[22px]">
          {title}
        </h2>
        <Link
          href={`/project/${title}?image=${src}&description=${description}&github=${githubLink}&live=${LiveLink}&techStack=${techStack}`}
          className="flex mt-5 gap-2 mx-[10px] items-center justify-center border p-3 rounded-md border-blue-500 text-[#55e6a5] font-semibold"
        >
          Visit Project <FaArrowRightLong size={18} />
        </Link>
        <div className="text-white flex flex-col 500px:flex-row  items-center justify-between gap-4 px-[10px] my-[20px] font-semibold">
          {githubLink ? (
            <Link
              href={`${githubLink}`}
              className="flex gap-2 w-full items-center justify-center border p-3 rounded-md border-blue-500 text-[#55e6a5] "
            >
              Github <FaGithub />
            </Link>
          ) : (
            <p className="flex items-center col-span-12 justify-center text-[#f0b666] ">
              {' '}
              Currently Working....
            </p>
          )}
          {LiveLink && (
            <Link
              href={`${LiveLink}`}
              className="flex gap-2 w-full items-center justify-center border p-3 rounded-md border-blue-500 text-[#55e6a5] "
            >
              Live <MdArrowOutward />
            </Link>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
