import useFetchData from "@/hooks/useFetchData";
import { userData } from "@/utils/types";
import { motion } from "framer-motion";
import SkillsItem from "./SkillsItem";
import Heading from "@/utils/heading";

const Skills = ({ data }: { data: userData | null }) => {
  return (
    <>
      <motion.div className="flex flex-col pt-[3rem] md:pt-[4rem] gap-5 pb-[5rem] bg-black/90">
        <h1 className="heading">
          Ski<span className="text-orange-400">lls</span>
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-[95%] pt-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-[2rem] items-center"
        >
          {data?.skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((item, index: number) => (
              <SkillsItem
                key={index}
                delay={`${(index + 1) * 100}`}
                image={item.image.url}
                skill={item.name}
                enabled={item.enabled}
                level={item.percentage}
              />
            ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
