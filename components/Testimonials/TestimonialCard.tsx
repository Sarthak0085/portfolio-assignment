import Image from "next/image";
import React from "react";

interface ITestimonialCard {
  name: string;
  position: string;
  review: string;
  image: string;
  index: number;
  delay: string;
}

const TestimonialCard = ({
  name,
  position,
  review,
  image,
  delay,
  index,
}: ITestimonialCard) => {
  const colors = ["#7FB3D5", "#98FF98", "#FFDAB9", "#E6E6FA", "#FFDB58"];
  return (
    <div data-aos="fadeUpIn" data-aos-delay={delay}>
      <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div
          style={{ backgroundColor: `${colors[index % 5]}` }}
          className={`h-28 overflow-hidden rounded-t-lg `}
        ></div>
        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <Image src={image} alt={name} width={200} height={200} />
        </div>
        <div className="p-6">
          <h4
            style={{ color: `${colors[index % 5]}` }}
            className="mb-4 text-2xl font-semibold capitalize "
          >
            {name}
          </h4>
          <h4 className="mb-4 text-xl font-semibold text-purple-500">
            ({position})
          </h4>
          <hr />
          <p className="mt-4">
            <span className="inline-block pe-2 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
            </span>
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
