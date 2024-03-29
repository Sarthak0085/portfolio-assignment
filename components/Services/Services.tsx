import Heading from "@/utils/heading";
import { userData } from "@/utils/types";
import ServiceCard from "./ServiceCard";

const Services = ({ data }: { data: userData | null }) => {
  return (
    <>
      <section className="bg-[#02050a] pt-[3rem] md:pt-[6rem] pb-[4rem]">
        <h1 className="heading">
          Ser<span className="text-orange-400">vices</span>
        </h1>
        <div className="w-[80%] 500px:w-[70%] md:w-[90%] pt-[2rem] mx-auto grid grid-cols-1 sm:w-[60%] md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          {data?.services
            .filter((item) => item.enabled === true)
            .map((data, index: number) => (
              <ServiceCard
                key={index}
                delay={`${(index + 1) * 300}`}
                title={data.name}
                src={data.image.url}
                description={data.desc}
                enabled={data.enabled}
                charge={data.charge}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default Services;
