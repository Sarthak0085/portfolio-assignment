"use client";
import { userData } from "@/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaServicestack } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import TextAnimation from "./TextAnimation";

const Hero = ({ data }: { data: userData | null }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [colors, setColors] = useState([
    "#FF7F50",
    "#40E0D0",
    "#FF69B4",
    "#9370DB",
    "#FFA500",
    "#20B2AA",
  ]);
  const textArray = data?.about?.quote?.split(" ") as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray?.length);
    }, 800);

    return () => clearInterval(interval);
  }, [textArray?.length]);

  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
        className="heading my-[3rem]"
      >
        <FaQuoteLeft
          className="mr-2 text-blue-500 dark:text-[#55e6a5] inline -translate-y-1/2"
          size={20}
        />
        {textArray?.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0.2,
              filter: index === currentIndex ? "none" : "blur(2px)",
            }}
            transition={{ duration: 0.7 }}
            style={{ color: colors[currentIndex] }}
            className="font-bold mx-2"
          >
            {word}
          </motion.span>
        ))}
        <FaQuoteRight
          className="ml-2 text-blue-500 dark:text-[#55e6a5] inline -translate-y-1/2"
          size={20}
        />
      </motion.h2>
      {data?.youtube.map((item, index: number) =>
        item?.url ? (
          <video
            key={index}
            loop
            muted
            className="min-w-[350px]  min-h-[450px] w-auto h-auto mx-[2rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <source src={item?.url} type="video/mp4" />
            {item.title}
          </video>
        ) : (
          <div
            key={index}
            className="min-w-[350px] min-h-[450px] mx-[2rem] bg-gray-200 flex items-center justify-center"
          >
            <p>Video not available or wrong url</p>
          </div>
        )
      )}
      <div className="w-[80%] my-[4rem] 1150px:w-[90%] gap-4 flex flex-col-reverse 1150px:flex-row items-center justify-between mx-auto">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, type: "keyframes", delay: 0.5 }}
          className="1150px:w-[50%] w-[80%] mx-auto text-[1.5rem] md:text-[2rem]"
        >
          <h2 className="text-[35px] md:text-[50px] mb-2 text-black dark:text-white font-bold flex-wrap">
            Hello, I&apos;M
            <span className="text-orange-500 px-5 uppercase ">
              {data?.about.name}
            </span>
            <span className="text-purple-500 block">({data?.about.title})</span>
          </h2>
          <span className="text-black dark:text-white capitalize text-[2rem] font-semibold px-2">
            I Develop
          </span>
          <TextAnimation data={data} />
          {/* <p className="text-[20px] mt-[2rem] text-black">
          {/* I&apos;m a fresher MERN stack developer and web enthusiast, eager to
          learn and create exciting web projects. Passionate about coding and
            exploring new technologies, I strive to build user-friendly and
            efficient web applications. Excited to contribute to the
            ever-evolving world of web development. */}
          {/* {data?.about.description}
        </p> */}
          <div className="flex items-center mt-5 gap-4">
            {data?.social_handles
              .filter((item) => item.enabled === true)
              .map((item) => (
                <Link
                  href={item.url}
                  title={item.platform}
                  key={item._id}
                  className=""
                >
                  <Image
                    src={item.image.url}
                    alt={item.platform}
                    height={30}
                    width={30}
                  />
                </Link>
              ))}
          </div>
          <div className="space-y-6 mt-[2rem] flex-col sm:space-y-0 sm:space-x-6 sm:flex sm:flex-row sm:items-center">
            <Link
              href="/contact"
              target="_blank"
              className="px-[1.5rem] gap-2 hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
            flex  text-black bg-blue-200 space-x-2"
            >
              Contact
              <IoIosContact className="h-[1.7rem] w-[1.6rem] text-black" />
            </Link>
            <Link
              href={"/services"}
              className="px-[2rem] gap-2 hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex text-black bg-blue-200 justify-center"
            >
              <FaServicestack className="h-[1.5rem] w-[1.6rem] text-black" />
              Services
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, type: "keyframes", delay: 0.5 }}
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] 1150px:w-[500px] 1150px:h-[500px] shadow-2xl shadow-black dark:shadow-white relative 1150px:flex items-center rounded-full bg-black dark:bg-white"
        >
          <Image
            src={data?.about.avatar.url ?? ""}
            alt={data?.userName ?? "John Doe"}
            layout="fill"
            className="object-cover rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
