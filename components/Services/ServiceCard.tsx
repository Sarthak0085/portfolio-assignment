import Image from "next/image";
import React from "react";

interface IServiceCard {
  enabled: boolean;
  title: string;
  description: string;
  src: string;
  delay: string;
  charge: string;
}

const ServiceCard = ({
  enabled,
  title,
  description,
  src,
  delay,
  charge,
}: IServiceCard) => {
  return (
    enabled === true && (
      <div
        data-aos="fadeUpIn"
        data-aos-delay={delay}
        className="border rounded-lg border-slate-500  hover:scale-110"
      >
        <div
          className="relative
                 h-[250px] 500px:h-[300px]"
        >
          <Image
            src={src}
            alt={title}
            layout="fill"
            className="object-cover rounded-t-lg"
          />
        </div>
        <h2 className="bg-gradient-to-r bg-clip-text text-transparent pt-5 text-center from-blue-500 to-[#55e6a5] font-bold text-[22px]">
          {title}
        </h2>
        <h4 className="px-[10px] text-[#55e6a5] pt-5 text-[16px]">
          {description}
        </h4>
        <div className="text-white flex flex-col 500px:flex-row  items-center justify-between gap-4 px-[10px] my-[20px]">
          <div className="flex gap-2 w-full items-center justify-center border p-3 rounded-md border-blue-500 text-[#55e6a5] ">
            {charge}
          </div>
        </div>
      </div>
    )
  );
};

export default ServiceCard;
