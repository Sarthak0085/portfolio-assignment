import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { motion } from 'framer-motion';

const LottieAnimation = () => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      whileInView={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5, type: 'keyframes', delay: 0.3 }}
    >
      <DotLottiePlayer
        src="/animation_llqd7ey4.lottie"
        autoplay
        loop
      ></DotLottiePlayer>
    </motion.div>
  );
};

export default LottieAnimation;
