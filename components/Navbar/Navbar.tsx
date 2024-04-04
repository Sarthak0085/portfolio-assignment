"use client";
import Heading from "@/utils/heading";
import { userData } from "@/utils/types";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import ThemeToggler from "../ThemeToggler";

interface Props {
  openNav: () => void;
  data: userData | null;
}

const Navbar: React.FC<Props> = ({ data, openNav }) => {
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
        activeLink.substring(1) !== "" ? "| " + activeLink.substring(1) : ""
      }`;
      const description =
        activeLink === "/"
          ? `This page shows the ${data?.about.name} Portfolio Home page`
          : `This page shows the ${
              data?.about.name
            } Portfolio's ${activeLink.substring(1)} page`;
      const keywords = "Nextjs, react, framer-motion";

      return { title, description, keywords };
    };

    const { title, description, keywords } = updateTitleDescriptionKeywords();
    setHeadProps({ title, description, keywords });
  }, [activeLink, data, pathname]);

  return (
    <>
      <Heading
        title={headProps.title}
        description={headProps.description}
        keywords={headProps.keywords}
      />
      <nav className="w-[100%] fixed z-[1000] h-[12vh] top-0 shadow-2xl dark:shadow-md text-gray-100 dark:bg-[#141c27]">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <motion.button
            className="cursor-pointer text-[25px] text-slate-500 dark:text-white font-bold"
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
          <div className="flex w-[70%] lg:gap-6 1350px:gap-7 items-center justify-evenly">
            <button
              className={`nav-link ${activeLink === "/" ? "active" : ""}`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </button>
            <button
              className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </button>
            <button
              className={`nav-link ${activeLink === "/skills" ? "active" : ""}`}
              onClick={() => handleLinkClick("/skills")}
            >
              Skills
            </button>
            <button
              className={`nav-link ${
                activeLink === "/services" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/services")}
            >
              Services
            </button>
            <button
              className={`nav-link ${
                activeLink === "/portfolio" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/portfolio")}
            >
              Portfolio
            </button>
            <button
              className={`nav-link ${
                activeLink === "/testimonials" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/testimonials")}
            >
              Testimonials
            </button>
            <button
              className={`nav-link ${
                activeLink === "/contact" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </button>
            <div className="lg:block hidden">
              <ThemeToggler />
            </div>
          </div>
          <div className="lg:hidden" onClick={openNav}>
            <FaBars className="w-[2rem] h-[2rem] cursor-pointer text-orange-400" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
