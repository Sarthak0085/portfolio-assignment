"use client";
import Heading from "@/utils/heading";
import { userData } from "@/utils/types";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Education from "./Education";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";

const About = ({ data }: { data: userData | null }) => {
  return (
    <>
      <div className="bg-slate-50 dark:bg-black pt-[4rem] pb-[4rem] md:pt-[4rem]">
        <h1 className="heading pb-[4rem]">
          About <span className="text-orange-400">Me</span>
        </h1>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="grid grid-cols-1 lg:grid-cols-4 1350px:grid-cols-5 space-y-5 1150px:gap-4 mx-auto"
        >
          <div className="col-span-2 mx-auto mt-[2rem] flex flex-col items-center justify-center">
            <div className="1150px:h-[500px] 1150px:w-[500px] md:h-[400px] md:w-[400px] w-[300px] h-[300px] relative">
              <Image
                src={data?.about?.alternateAvatars[0]?.url ?? ""}
                alt="users"
                layout="fill"
                className="relative w-[100%] rounded-2xl z-[100] object-cover"
              />
              <div className="absolute bottom-0 -left-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-[#55e6a5]"></div>
              <div className="absolute bottom-0 -left-6 -z-20 w-[104%] h-[106%] rounded-2xl bg-blue-500"></div>
            </div>
            <div className="flex 1350px:hidden my-[2rem] gap-10 items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  {data?.about.exp_year}
                </span>
                <h2>Years of Experience</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  {data?.about.some_total}
                </span>
                <h2>Projects Completed</h2>
              </div>
            </div>
          </div>
          <div className="col-span-2 px-2 flex items-center  justify-center lg:justify-start flex-col">
            <h2
              className="text-[25px] md:text-[35px] 1150px:text-[45px] leading-[2rem] md:leading-[3rem] capitalize 
            mb-[2rem] font-bold text-black dark:text-white"
            >
              {data?.about?.name?.split(" ")[0]}&nbsp;
              <span className="text-orange-400">
                {data?.about?.name?.split(" ")[1]}
              </span>
              <h4 className="text-[20px] inline pl-2 md:text-[25px] 1150px:text-[35px]">
                ({data?.about?.title})
              </h4>
            </h2>
            <div className="mb-[2rem] flex justify-center 1150px:justify-start items-center md:space-x-10">
              <h4
                className="text-[16px] md:text-[22px] 1150px:text-[30px] leading-[2rem] md:leading-[3rem] capitalize 
                font-bold text-black/95 dark:text-slate-50"
              >
                {data?.about?.subTitle}
              </h4>
            </div>
            <div className="mb-[2rem] flex justify-center 1150px:justify-start items-center md:space-x-10">
              <p className="text-[20px] text-slate-800 dark:text-slate-100">
                {data?.about?.description}
              </p>
            </div>
            <div className="text-black dark:text-white flex flex-col sm:flex-row items-center gap-16">
              <a
                href={`mailto:${data?.about.contactEmail}`}
                target="_blank"
                className="px-[1.5rem] transition-all duration-200 py-[1rem] text-[20px] font-bold
                      flex  border border-blue-200 gap-2"
              >
                Email
                <MdOutlineEmail className="h-[1.7rem] w-[1.6rem] " />
              </a>
              <a
                href={`tel:${data?.about.phoneNumber}`}
                target="_blank"
                className="px-[1.5rem] gap-2 transition-all duration-200 py-[1rem] text-[20px] font-bold
            flex text-black bg-blue-200 justify-center"
              >
                <CiMobile4 className="h-[1.7rem] w-[1.6rem] text-black" />
                Ph. No.
              </a>
            </div>
          </div>
          <div className="hidden 1350px:col-span-1 1350px:flex flex-col items-center justify-evenly pr-2">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                {data?.about.exp_year}
              </span>
              <h2>Years of Experience</h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                {data?.about.some_total}
              </span>
              <h2>Projects Completed</h2>
            </div>
          </div>
        </div>

        <Education data={data} />
      </div>
    </>
  );
};

export default About;
