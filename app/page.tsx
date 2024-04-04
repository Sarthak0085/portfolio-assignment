'use client';
import About from '@/components/About/About';
import CircularText from '@/components/CircularText';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Hero from '@/components/Home/Hero';
import Loader from '@/components/Loader';
import Parallax from '@/components/Parallax/Parallax';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import Skills from '@/components/Skills/Skills';
import Testimonials from '@/components/Testimonials/Testimonials';
import useFetchData from '@/hooks/useFetchData';
import { userData } from '@/utils/types';

export default function Home() {
  const { loading, error, data } = useFetchData<userData>();

  // if (!isMounted) {
  //   return null;
  // }

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="flex h-[100vh] items-center justify-center text-[red] text-4xl font-bold">
      {error?.message ?? 'There is an error while fetching the data.'}
    </div>
  ) : (
    <div className="overflow-x-hidden">
      <Parallax type="home" />
      <Hero data={data} />
      <Parallax type="about" />
      <About data={data} />
      <Parallax type="skills" />
      <Skills data={data} />
      <Parallax type="services" />
      <Services data={data} />
      <Parallax type="portfolio" />
      <Experience data={data} />
      <Projects data={data} />
      <Parallax type="testimonials" />
      <Testimonials data={data} />
      <Parallax type="contact" />
      <Contact data={data} />
    </div>
  );
}
