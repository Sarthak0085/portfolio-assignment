"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import useFetchData from "@/hooks/useFetchData";
import { userData } from "@/utils/types";
import Heading from "@/utils/heading";
import ThemeToggler from "../ThemeToggler";

interface Props {
  openNav: () => void;
}

const MotionLink = motion(Link);

const Navbar: React.FC<Props> = ({ openNav }) => {
  const { loading, error, data } = useFetchData<userData>();
  console.log(data);

  const [pathname, setPathname] = useState<string>(usePathname());
  const [headProps, setHeadProps] = useState({
    title: `Portfolio-${data?.about.name}`,
    description: `This page shows the ${data?.about.name} Portfolio Home page`,
    keywords: `React, Nextjs, Framer-Motion`,
  });

  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "skills",
      "services",
      "projects",
      "testimonials",
      "contact",
    ];

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          const newPathname = sectionId === "home" ? "/" : `/${sectionId}`;
          setPathname(newPathname);
          window.history.replaceState(null, "", newPathname);
          return;
        }
      }
    }
  };

  const scrollToSection = (sectionId: string, newPathname: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setPathname(newPathname);
        window.history.replaceState(
          null,
          "",
          newPathname !== "home" ? newPathname : "/"
        );
      }, 300);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateTitleDescriptionKeywords = () => {
      const title = `Portfolio-${
        data ? data?.about.name : "John Doe"
      } | ${pathname.substring(1)}`;
      const description =
        pathname === "/"
          ? `This page shows the ${data?.about.name} Portfolio Home page`
          : `This page shows the ${
              data?.about.name
            } Portfolio's ${pathname.substring(1)} page`;
      const keywords = "Nextjs, react, framer-motion";

      return { title, description, keywords };
    };

    const { title, description, keywords } = updateTitleDescriptionKeywords();
    setHeadProps({ title, description, keywords });
  }, [pathname]);

  return (
    <>
      <Heading
        title={headProps.title}
        description={headProps.description}
        keywords={headProps.keywords}
      />
      <nav className="w-[100%] fixed z-[1000] h-[12vh] top-0 shadow-md bg-[#141c27]">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <MotionLink
            href={"/"}
            className="cursor-pointer text-[25px] text-white font-bold"
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
          </MotionLink>
          <div className="flex w-[70%] gap-7 items-center justify-evenly">
            <button
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
              onClick={() => scrollToSection("home", "/")}
            >
              Home
            </button>
            <button
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
              onClick={() => scrollToSection("about", "/about")}
            >
              About
            </button>
            <button
              className={`nav-link ${pathname === "/skills" ? "active" : ""}`}
              onClick={() => scrollToSection("skills", "/skills")}
            >
              Skills
            </button>
            <button
              className={`nav-link ${pathname === "/services" ? "active" : ""}`}
              onClick={() => scrollToSection("services", "/services")}
            >
              Services
            </button>
            <button
              className={`nav-link ${pathname === "/projects" ? "active" : ""}`}
              onClick={() => scrollToSection("projects", "/projects")}
            >
              Work
            </button>
            <button
              className={`nav-link ${
                pathname === "/testimonials" ? "active" : ""
              }`}
              onClick={() => scrollToSection("testimonials", "/testimonials")}
            >
              Testimonials
            </button>
            <button
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
              onClick={() => scrollToSection("contact", "/contact")}
            >
              Contact
            </button>
            <ThemeToggler />
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
