import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  skill: string;
  level: number;
  delay: number;
  enabled: boolean;
  image: string;
}

const SkillsItem: React.FC<Props> = ({
  skill,
  level,
  delay,
  image,
  enabled,
}) => {
  return (
    enabled === true && (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          type: "keyframes",
          delay: delay,
        }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <div className="w-1/3 sm:pl-[2rem] flex items-center gap-2 text-black dark:text-white">
          {image && (
            <Image
              src={image}
              alt={skill}
              height={50}
              width={50}
              className="w-[50px] h-[50px]"
            />
          )}
          <span className="font-bold">{skill}</span>
        </div>
        <div className="w-2/3 bg-gray-200 rounded-full">
          <div className="relative w-full">
            <div className="h-10 bg-gray-200 rounded-full flex items-center relative">
              <motion.div
                className="h-full bg-[#55e6a5] rounded-full"
                style={{ width: `${level}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  backgroundColor: [
                    "rgba(127, 255, 212, 1)", // Aquamarine
                    "rgba(218, 112, 214, 1)", // Orchid
                    "rgba(255, 105, 180, 1)", // Hot Pink
                    "rgba(255, 215, 0, 1)", // Gold
                    "rgba(70, 130, 180, 1)", // Steel Blue
                    "rgba(255, 140, 0, 1)", // Dark Orange
                    "rgba(0, 255, 127, 1)", // Spring Green
                    "rgba(240, 128, 128, 1)", // Light Coral
                    "rgba(154, 205, 50, 1)", // Yellow Green
                    "rgba(240, 230, 140, 1)", // Khaki
                  ],
                  transition: { duration: 4, repeat: Infinity },
                }}
              ></motion.div>
              <motion.div
                className="absolute top-2 right-2 text-[16px] text-black fold-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {level}%
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  );
};

export default SkillsItem;
