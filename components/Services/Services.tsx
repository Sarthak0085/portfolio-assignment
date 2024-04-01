import Heading from "@/utils/heading";
import { userData } from "@/utils/types";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const Services = ({ data }: { data: userData | null }) => {
  return (
    <section className="text-white/75 dark:bg-[#02050a] min-h-[100vh] pt-[2rem] md:pt-[4rem] pb-[4rem]">
      <motion.h2
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
        className="heading"
      >
        Ser<span className="text-orange-400">vices</span>
      </motion.h2>
      <div className="grid mt-10 gap-6 text-center md:grid-cols-3">
        {data?.services
          .filter((item) => item.enabled === true)
          .map((data, index: number) => (
            <ServiceCard
              key={index}
              delay={(index + 1) * 0.3}
              title={data.name}
              src={data.image.url}
              description={data.desc}
              enabled={data.enabled}
              charge={data.charge}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
