"use client";
import About from "@/components/About/About";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Projects/Projects";
// import Blogs from '@/components/Blog/Blogs';
import Contact from "@/components/Contact/Contact";
import Heading from "@/utils/heading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/Services/Services";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import useFetchData from "@/hooks/useFetchData";
import { userData } from "@/utils/types";
import Testimonials from "@/components/Testimonials/Testimonials";
import CircleIndicator from "@/components/CircularIndicator";
import CircleFollowingCursor from "@/components/CircleFollowingCursor";
import Parallax from "@/components/Parallax/Parallax";

export default function Home() {
  const { loading, error, data } = useFetchData<userData>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    loading === false &&
    !error &&
    mounted && (
      <div className="overflow-x-hidden">
        <CircleFollowingCursor />
        <CircleIndicator />
        <Parallax type="home" />
        <Hero data={data} />
        <Parallax type="about" />
        <About data={data} />
        <Parallax type="skills" />
        <Skills data={data} />
        <Parallax type="services" />
        <Services data={data} />
        <Parallax type="projects" />
        <Experience data={data} />
        <Projects data={data} />
        <Parallax type="testimonials" />
        <Testimonials data={data} />
        <Parallax type="contact" />
        <Contact data={data} />
        <Footer data={data} />
      </div>
    )
  );
}
