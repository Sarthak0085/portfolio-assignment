'use client';
import { userData } from '@/utils/types';
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = ({ data }: { data: userData | null }) => {
  const textData = data?.about.subTitle.split(/, | and /);

  return (
    <TypeAnimation
      sequence={[
        '3D Visuals',
        2000,
        'user interfaces',
        2000,
        'web applications',
      ]}
      wrapper="span"
      speed={50}
      className="font-bold text-[1.5rem] md:text-[2rem] capitalize text-[#55e6a5]"
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
