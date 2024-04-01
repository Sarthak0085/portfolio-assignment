"use client";
import CircularText from "@/components/CircularText";
import Loader from "@/components/Loader";
import Parallax from "@/components/Parallax/Parallax";
import Services from "@/components/Services/Services";
import useFetchData from "@/hooks/useFetchData";
import { userData } from "@/utils/types";

const ServicesPage = () => {
  const { loading, error, data, isMounted } = useFetchData<userData>();

  //   if (!isMounted) {
  //     return null;
  //   }

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="flex h-[100vh] items-center justify-center text-[red] text-5xl font-bold">
      {error?.message ?? "There is an error while fetching the data."}
    </div>
  ) : (
    <div className="">
      <CircularText />
      <Parallax type="services" />
      <Services data={data} />
    </div>
  );
};

export default ServicesPage;
