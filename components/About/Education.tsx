import { userData } from "@/utils/types";
import { motion, useScroll } from "framer-motion";
import { MutableRefObject, useRef } from "react";
import Details from "../shared/Details";

const Education = ({ data }: { data: userData | null }) => {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="py-20">
      <h1 className="heading pb-[4rem]">
        Edu<span className="text-orange-400">cation</span>
      </h1>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black dark:bg-white origin-top"
        />
        <ul>
          {data?.timeline
            ?.filter(
              (item) => item.forEducation === true && item.enabled === true
            )
            .map((item, index: number) => (
              <Details
                key={index}
                position={item.jobTitle}
                company={item.company_name}
                summary={item.summary}
                startDate={item.startDate}
                points={item.bulletPoints}
                endDate={item.endDate}
                jobLocation={item.jobLocation}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;