import { userData } from "@/utils/types";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

const Testimonials = ({ data }: { data: userData | null }) => {
  return (
    <section className="pt-[3rem] md:pt-[6rem] pb-[4rem] dark:text-neutral-300">
      <motion.h2
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
        className="heading"
      >
        Testi<span className="text-orange-400">monials</span>
      </motion.h2>
      <div className="grid mt-10 gap-6 text-center md:grid-cols-3">
        {data?.testimonials
          .filter((item) => item.enabled === true)
          .map((item, index: number) => (
            <TestimonialCard
              key={index}
              index={index}
              delay={(index + 1) * 0.3}
              name={item.name}
              review={item.review}
              position={item.position}
              image={item.image.url}
            />
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
