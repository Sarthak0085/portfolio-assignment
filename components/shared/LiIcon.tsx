'use client';
import { motion, useScroll } from 'framer-motion';
import { MutableRefObject } from 'react';

const LiIcon = ({
  reference,
}: {
  reference: MutableRefObject<HTMLDivElement | null>;
}) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });
  return (
    <figure className="absolute left-0 stroke-black dark:stroke-white">
      <svg
        className="-rotate-90"
        width={'75'}
        height={'75'}
        viewBox="0 0 100 100"
      >
        <circle
          cx={'75'}
          cy={'50'}
          r={'20'}
          className="stroke-1 stroke-[purple] dark:fill-[#55e6a5] fill-none"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx={'75'}
          cy={'50'}
          r={'20'}
          className="stroke-[5px] fill-white dark:fill-black"
        />
        <circle
          cx={'75'}
          cy={'50'}
          r={'10'}
          className="animate-pulse stroke-1 fill-[purple] dark:fill-[#55e6a5]"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
