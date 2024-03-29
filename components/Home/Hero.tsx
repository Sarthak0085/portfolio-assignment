import React from "react";
import Particle from "./Particle";
import TextAnimation from "./TextAnimation";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { userData } from "@/utils/types";
import Link from "next/link";
import Heading from "@/utils/heading";

const Hero = ({ data }: { data: userData | null }) => {
  return (
    <>
      {/* <Particle /> */}
      <div
        id="Home"
        className="w-[80%] my-[5%] h-[100vh] 1150px:w-[90%] gap-4 flex flex-col-reverse 1150px:flex-row items-center justify-between mx-auto"
      >
        <div className="1150px:w-[50%] w-[100%] text-[1.5rem] md:text-[2rem]">
          <h2 className="text-[35px] md:text-[50px] mb-2 text-black font-bold flex-wrap">
            Hello, I&apos;M
            <span className="text-orange-500 px-5 uppercase ">
              {data?.about.name}
            </span>
            <span className="text-purple-500 block">({data?.about.title})</span>
          </h2>
          <span className="text-black capitalize text-[2rem] font-semibold px-2">
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
            <a
              href="images/Sarthak_Resume.pdf"
              download="Sarthak_Resume.pdf"
              target="_blank"
              className="px-[1.5rem] gap-2 hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
            flex  w-[230px] text-black bg-blue-200 space-x-2"
            >
              Download CV
              <FiDownload className="h-[1.7rem] w-[1.6rem] text-black" />
            </a>
            <a
              href={"https://github.com/Sarthak0085/"}
              className="px-[2rem] gap-2 hover:bg-orange-400 transition-all duration-200 py-[1rem] text-[20px] font-bold
                              flex text-black bg-blue-200 w-[230px] justify-center"
            >
              <FaGithub className="h-[1.5rem] w-[1.6rem] text-black" />
              Github
            </a>
          </div>
        </div>
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] 1150px:w-[500px] 1150px:h-[500px] shadow-2xl shadow-black relative 1150px:flex items-center rounded-full bg-[#55e6a5]">
          <Image
            src={data?.about.avatar.url ?? ""}
            alt={data?.userName ?? "John Doe"}
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
