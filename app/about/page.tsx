'use client';
import About from '@/components/About/About';
import Loader from '@/components/Loader';
import Parallax from '@/components/Parallax/Parallax';
import useFetchData from '@/hooks/useFetchData';
import { userData } from '@/utils/types';

const AboutPage = () => {
  const { loading, error, data } = useFetchData<userData>();

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="flex h-[100vh] items-center justify-center text-[red] text-4xl font-bold">
      {error?.message ?? 'There is an error while fetching the data.'}
    </div>
  ) : (
    <div className="overflow-x-hidden">
      <Parallax type="about" />
      <About data={data} />
    </div>
  );
};

export default AboutPage;
