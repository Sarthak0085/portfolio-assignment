'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import LiIcon from './LiIcon';

interface IDetails {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  jobLocation: string;
  summary: string;
  points: string[];
}

const Details = ({
  position,
  company,
  startDate,
  endDate,
  jobLocation,
  summary,
  points,
}: IDetails) => {
  const ref = useRef(null);

  const formattedDate = (date: string) => {
    const initialDate = date.slice(0, 10);
    const newDate = new Date(initialDate);
    const formattedDate = newDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: '2-digit',
    });
    return formattedDate;
  };

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <span className="text-[purple] dark:text-[#55e6a5] capitalize">
            @{company}
          </span>
        </h3>
        <span className="capitalize font-medium text-black/75">
          {formattedDate(startDate)}-{formattedDate(endDate)} | {jobLocation}
        </span>
        <p className="font-medium mt-2 w-full">{summary}</p>
        <ul className="font-bold mt-2 leading-snug">
          key Points
          {points.map((p, index: number) => (
            <li key={index} className="font-medium w-full">
              {p !== '' && <span className="text-[20px]">&#x2022;&nbsp;</span>}
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

export default Details;
