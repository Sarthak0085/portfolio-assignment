import { userData } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = ({ data }: { data: userData | null }) => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
      <div className="py-8 px-4 grid px-auto text-center sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
        <div>
          <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        </div>
        <div>
          Build With{" "}
          <span className="text-2xl text-[purple] px-1">&#9825;</span>{" "}
          {data?.about.name}
        </div>
        <div className="flex items-center justify-center gap-4">
          {data?.social_handles
            .filter((item) => item.enabled === true)
            .map((item) => (
              <Link
                href={item.url}
                title={item.platform}
                key={item._id}
                className=""
              >
                <Image
                  src={item.image.url}
                  alt={item.platform}
                  height={30}
                  width={30}
                />
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
