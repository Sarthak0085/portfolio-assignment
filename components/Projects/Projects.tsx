import { userData } from "@/utils/types";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = ({ data }: { data: userData | null }) => {
  return (
    <>
      <section className="bg-slate-100 dark:bg-[#02050a] pt-[3rem] md:pt-[6rem] pb-[4rem]">
        <motion.h1
          animate={{
            scale: [1, 2, 2, 1, 0, 1],
          }}
          transition={{
            scale: {
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          className="heading z-10"
        >
          Pro<span className="text-orange-400">jects</span>
        </motion.h1>
        <div className="w-[90%] 500:w-[70%] md:w-[90%] pt-[2rem] mx-auto grid grid-cols-1 sm:w-[60%] md:grid-cols-2 1150px:grid-cols-3 gap-[2rem]">
          {data?.projects
            .sort((a, b) => a.sequence - b.sequence)
            .map((data, index: number) => (
              <ProjectCard
                key={index}
                delay={`${(index + 1) * 300}`}
                title={data.title}
                src={data.image.url}
                githubLink={data.githuburl}
                LiveLink={data.liveurl}
                description={data.description}
                enabled={data.enabled}
                techStack={data.techStack}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
