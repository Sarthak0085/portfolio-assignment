"use client";
import useWindowSize from "@/hooks/useWindowSize";
import {
  useScroll,
  useTransform,
  motion,
  useAnimation,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef(null);
  const screenWidth = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      ["0%", screenWidth > 1024 ? "60%" : "60%"]
    )
  );
  const yText = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      ["0%", screenWidth > 768 ? "250%" : screenWidth > 500 ? "100%" : "50%"]
    )
  );

  const [currentColor, setCurrentColor] = useState("#ffffff");
  const controls = useAnimation();

  useEffect(() => {
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];

    const intervalId = setInterval(() => {
      const nextColorIndex = (colors.indexOf(currentColor) + 1) % colors.length;
      const nextColor = colors[nextColorIndex];
      setCurrentColor(nextColor);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentColor]);

  return (
    <div
      id={type}
      ref={ref}
      className={`flex items-center justify-center relative w-[100%] h-[100vh] ${
        type === "services" || type === "about" || type === "testimonials"
          ? "bg-gradient-to-b dark:from-[#111132] dark:to-[#0c0c1d] from-[#f0f0f0] to-[#a0a0a0]"
          : "bg-gradient-to-b dark:from-[#111132] dark:to-[#505064] from-[#f0f0f0] to-[#c0c0c0]"
      }`}
    >
      <motion.h1
        style={{ y: yText, color: currentColor }}
        animate={controls}
        className="text-[100px] text-center px-2 z-10 text-white"
      >
        {type === "services"
          ? "What I Do"
          : type === "portfolio"
          ? "What I Did"
          : type === "testimonials"
          ? "People's Thinks"
          : type === "skills"
          ? "What I Knew"
          : type === "contact"
          ? "How To Connect"
          : type === "about"
          ? "Who Am I"
          : "Scroll to Start"}
      </motion.h1>
      <motion.div
        className="absolute w-[100%] h-[100%] z-3"
        style={{
          backgroundImage: "url(/mountains.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></motion.div>
      <motion.div
        className="absolute w-[100%] h-[100%] z-2"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "about" || type === "skills" || type === "testimonials"
              ? "/planets.png"
              : "/sun.png"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></motion.div>
      <motion.div
        className="absolute w-[100%] h-[100%] z-1"
        style={{
          x: yBg,
          backgroundImage: "url(/stars.png)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
