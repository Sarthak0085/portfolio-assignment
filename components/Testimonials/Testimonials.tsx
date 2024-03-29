import { userData } from "@/utils/types";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import Heading from "@/utils/heading";

const Testimonials = ({ data }: { data: userData | null }) => {
  return (
    <>
      <section className="text-neutral-700 pt-[3rem] md:pt-[6rem] pb-[4rem] dark:text-neutral-300">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <motion.h1
            animate={{
              x: ["0%", "45%", "-45%", "0%"],
              transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="heading"
          >
            Testi<span className="text-orange-400">monials</span>
          </motion.h1>
        </div>
        <div className="grid mt-10 gap-6 text-center md:grid-cols-3">
          {data?.testimonials
            .filter((item) => item.enabled === true)
            .map((item, index: number) => (
              <TestimonialCard
                key={index}
                index={index}
                delay={`${(index + 1) * 200}`}
                name={item.name}
                review={item.review}
                position={item.position}
                image={item.image.url}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
