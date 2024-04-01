import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

interface ITestimonialCard {
  name: string;
  position: string;
  review: string;
  image: string;
  index: number;
  delay: number;
}

const TestimonialCard = ({
  name,
  position,
  review,
  image,
  delay,
  index,
}: ITestimonialCard) => {
  const colors = ["#7FB3D5", "#98FF98", "#FFDAB9", "#E6E6FA", "#FFDB58"];
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{
        duration: 0.5,
        type: "keyframes",
        delay: delay,
      }}
    >
      <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div
          style={{ backgroundColor: `${colors[index % 5]}` }}
          className={`h-28 overflow-hidden rounded-t-lg `}
        ></div>
        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <Image src={image} alt={name} width={200} height={200} />
        </div>
        <div className="p-6">
          <h4
            style={{ color: `${colors[index % 5]}` }}
            className="mb-4 text-2xl font-semibold capitalize "
          >
            {name}
          </h4>
          <h4 className="mb-4 text-xl font-semibold text-purple-500">
            ({position})
          </h4>
          <hr />
          <p className="mt-4">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <FaQuoteLeft />
            </span>
            {review}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
