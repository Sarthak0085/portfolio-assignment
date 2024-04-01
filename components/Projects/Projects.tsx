import { userData } from "@/utils/types";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = ({ data }: { data: userData | null }) => {
  return (
    <>
      <section className="bg-slate-100 dark:bg-[#02050a] pt-[2rem] md:pt-[4rem] pb-[4rem]">
        <motion.h2
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
          className="heading"
        >
          Pro<span className="text-orange-400">jects</span>
        </motion.h2>
        <div className="w-[90%] 500px:w-[70%] md:w-[90%] pt-[2rem] mx-auto grid grid-cols-1 sm:w-[60%] md:grid-cols-2 1150px:grid-cols-3 gap-[2rem]">
          {data?.projects
            .sort((a, b) => a.sequence - b.sequence)
            .filter((item) => item.enabled === true)
            .map((data, index: number) => (
              <ProjectCard
                key={index}
                delay={(index + 1) * 0.1}
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
