"use client";
import CircularText from "@/components/CircularText";
import Contact from "@/components/Contact/Contact";
import Loader from "@/components/Loader";
import Parallax from "@/components/Parallax/Parallax";
import useFetchData from "@/hooks/useFetchData";
import { userData } from "@/utils/types";

const ContactPage = () => {
  const { loading, error, data, isMounted } = useFetchData<userData>();

  // if (!isMounted) {
  //   return null;
  // }

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="flex h-[100vh] items-center justify-center text-[red] text-4xl font-bold">
      {error?.message ?? "There is an error while fetching the data."}
    </div>
  ) : (
    <div className="overflow-x-hidden">
      <Parallax type="contact" />
      <Contact data={data} />
    </div>
  );
};

export default ContactPage;
