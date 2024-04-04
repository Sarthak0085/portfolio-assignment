'use client';
import Experience from '@/components/Experience/Experience';
import Loader from '@/components/Loader';
import Parallax from '@/components/Parallax/Parallax';
import Projects from '@/components/Projects/Projects';
import useFetchData from '@/hooks/useFetchData';
import { userData } from '@/utils/types';

const ProjectsPage = () => {
  const { loading, error, data } = useFetchData<userData>();

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="flex h-[100vh] items-center justify-center text-[red] text-5xl font-bold">
      {error?.message ?? 'There is an error while fetching the data.'}
    </div>
  ) : (
    <div className="overflow-x-hidden">
      <Parallax type="portfolio" />
      <Experience data={data} />
      <Projects data={data} />
    </div>
  );
};

export default ProjectsPage;
