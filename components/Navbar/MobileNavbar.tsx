"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import ThemeToggler from "../ThemeToggler";
import { userData } from "@/utils/types";
import { motion } from "framer-motion";

interface Props {
  nav: boolean;
  closeNav: () => void | undefined;
  data: userData | null;
}

const MobileNavbar: React.FC<Props> = ({ data, nav, closeNav }) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const pathname = usePathname();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(pathname);
  const [headProps, setHeadProps] = useState({
    title: `Portfolio-${data?.about.name}`,
    description: `This page shows the ${data?.about.name} Portfolio Home page`,
    keywords: `React, Nextjs, Framer-Motion`,
  });

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", path: "/" },
        { id: "about", path: "/about" },
        { id: "contact", path: "/contact" },
        { id: "testimonials", path: "/testimonials" },
        { id: "skills", path: "/skills" },
        { id: "services", path: "/services" },
        { id: "portfolio", path: "/portfolio" },
      ];

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            setActiveLink(section.path);
            window.history.replaceState(null, "", section.path);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateTitleDescriptionKeywords = () => {
      const title = `Portfolio-${data ? data?.about.name : "John Doe"} ${
        activeLink.substring(1) !== "" ? "|" + activeLink.substring(1) : ""
      }`;
      const description =
        pathname === "/"
          ? `This page shows the ${data?.about.name} Portfolio Home page`
          : `This page shows the ${
              data?.about.name
            } Portfolio's ${activeLink.substring(1)} page`;
      const keywords = "Nextjs, react, framer-motion";

      return { title, description, keywords };
    };

    const { title, description, keywords } = updateTitleDescriptionKeywords();
    setHeadProps({ title, description, keywords });
  }, [activeLink]);

  return (
    <div
      className={`fixed transform ${navAnimation} transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-white/90 dark:bg-[#09101a]`}
    >
      <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]">
        <motion.button
          className="cursor-pointer w-full mb-[2rem] p-[1rem] text-[25px] text-blue-500 border-b dark:border-white border-black dark:text-[#55e6a5] font-bold"
          onClick={() => handleLinkClick("/")}
          whileHover={{
            color: [
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
            transition: { duration: 1.5, repeat: Infinity },
          }}
        >
          {data?.about.name.split(" ")[0]}&nbsp;
          {data?.about.name.split(" ")[1]}
        </motion.button>
        <button
          className={`nav-link-mobile ${
            activeLink === "/" ? "active-mobile" : ""
          }`}
          onClick={() => {
            handleLinkClick("/");
            closeNav();
          }}
        >
          Home
        </button>
        <button
          className={`nav-link-mobile ${
            activeLink === "/about" ? "active-mobile" : ""
          }`}
          onClick={() => {
            handleLinkClick("/about");
            closeNav();
          }}
        >
          About
        </button>
        <button
          className={`nav-link-mobile ${
            activeLink === "/skills" ? "active-mobile" : ""
          }`}
          onClick={() => {
            handleLinkClick("/skills");
            closeNav();
          }}
        >
          Skills
        </button>
        <button
          className={`nav-link-mobile ${
            activeLink === "/services" ? "active-mobile" : ""
          }`}
          onClick={() => {
            handleLinkClick("/services");
            closeNav();
          }}
        >
          Services
        </button>
        <button
          className={`nav-link-mobile ${
            activeLink === "/portfolio" ? "active-mobile" : ""
          }`}
          onClick={() => {
            handleLinkClick("/portfolio");
            closeNav();
          }}
        >
          Portfolio
        </button>
        <button
          className={`nav-link-mobile ${
            activeLink === "/testimonials" ? "active-mobile" : ""
          }`}
          onClick={() => {
            handleLinkClick("/testimonials");
            closeNav !== undefined && closeNav();
          }}
        >
          Testimonials
        </button>
        <button
          className={`nav-link-mobile ${
            activeLink === "/contact" ? "active-mobile" : ""
          }`}
          onClick={() => {
            handleLinkClick("/contact");
            closeNav();
          }}
        >
          Contact
        </button>
        <ThemeToggler />
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] text-orange-400"
      >
        <IoMdClose className="h-[2rem] w-[2rem]" />
      </div>
    </div>
  );
};

export default MobileNavbar;
