import React from "react";
import LottieAnimation from "./LottieAnimation";
import ContactForm from "./ContactForm";
import Heading from "@/utils/heading";
import { userData } from "@/utils/types";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = ({ data }: { data: userData | null }) => {
  return (
    <>
      <div className="bg-white/95 dark:bg-[#09101a] pt-[4rem] md:pt-[6rem] pb-[3rem]">
        <motion.h1
          animate={{
            rotate: [0, 360, 0, 0],
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            },
          }}
          className="heading"
        >
          Contact <span className="text-orange-400">Me</span>
        </motion.h1>
        <div className="w-[100%] pt-[2rem] flex flex-col lg:flex-row items-center justify-center ">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="inline-block w-full lg:w-2/4 h-full"
          >
            <LottieAnimation />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="w-full lg:w-2/4 border-t-2 mt-[2rem] lg:mt-0 pt-[2rem] lg:pt-0 lg:border-t-0 lg:border-l-2 border-slate-800 px-[20px] border-solid flex flex-col items-start lg:items-start justify-center pb-8"
          >
            <div className="font-bold capitalize text-4xl text-[#55e6a5]">
              Let&apos;s Connect
            </div>
            <ContactForm />
            <div className="text-[20px] font-medium text-black dark:text-white">
              Mail{" "}
              <a
                href={`mailto:${data?.email}`}
                className="text-[#55e6a5] block !text-[20px]"
              >
                {data?.email}
              </a>
            </div>
            <div className="text-[20px] mt-5 font-medium text-black dark:text-white">
              Address{" "}
              <span className="text-[#55e6a5] block !text-[20px]">
                {data?.about.address}
              </span>
            </div>
            <div className="text-[20px] mt-5 font-medium text-black dark:text-white">
              Phone
              <a
                href={`tel:${data?.about?.phoneNumber}`}
                className="text-[#55e6a5] block !text-[20px]"
              >
                {data?.about?.phoneNumber}
              </a>
            </div>
            <div className="text-[20px] mt-5 font-medium text-black dark:text-white">
              Connect with me
              <div className="flex mt-2 items-center justify-center gap-4">
                {data?.social_handles
                  .filter((item) => item.enabled === true)
                  .map((item) => (
                    <a
                      aria-label={item.platform}
                      key={item?._id}
                      href={item.url}
                      className="text-[#55e6a5] !text-[20px]"
                    >
                      <Image
                        aria-label={item?.platform}
                        src={item.image.url ?? ""}
                        alt={item.platform}
                        width={30}
                        height={30}
                      />
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
