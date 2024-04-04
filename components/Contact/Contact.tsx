import { userData } from '@/utils/types';
import Image from 'next/image';
import ContactForm from './ContactForm';
import LottieAnimation from './LottieAnimation';
import { motion } from 'framer-motion';

const Contact = ({ data }: { data: userData | null }) => {
  return (
    <section className="bg-white/95 dark:bg-[#09101a] pt-[2rem] md:pt-[4rem] pb-[2rem]">
      <motion.h2
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.3 }}
        className="heading"
      >
        Contact <span className="text-orange-400">Me</span>
      </motion.h2>
      <div className="w-[100%] pt-[2rem] flex flex-col lg:flex-row items-center justify-center ">
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="inline-block w-full lg:w-2/4 h-full"
        >
          <LottieAnimation />
        </div>
        <motion.div
          initial={{ x: '100%' }}
          whileInView={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, type: 'keyframes', delay: 0.3 }}
          className="w-full lg:w-2/4 border-t-2 mt-[2rem] lg:mt-0 pt-[2rem] lg:pt-0 lg:border-t-0 lg:border-l-2 border-slate-800 px-[20px] border-solid flex flex-col items-start lg:items-start justify-center pb-8"
        >
          <div className="font-bold capitalize text-4xl text-[#55e6a5]">
            Let&apos;s Connect
          </div>
          <ContactForm />
          <div className="text-[20px] text-center mx-auto lg:mx-0 lg:text-start font-medium text-black dark:text-white">
            Mail{' '}
            <a
              href={`mailto:${data?.email}`}
              className="text-[#55e6a5] block !text-[20px]"
            >
              {data?.email}
            </a>
          </div>
          <div className="text-[20px] mt-5 text-center mx-auto  lg:mx-0 lg:text-start font-medium text-black dark:text-white">
            Address{' '}
            <span className="text-[#55e6a5] block !text-[20px]">
              {data?.about.address}
            </span>
          </div>
          <div className="text-[20px] mt-5 text-center mx-auto lg:mx-0 lg:text-start font-medium text-black dark:text-white">
            Phone
            <a
              href={`tel:${data?.about?.phoneNumber}`}
              className="text-[#55e6a5] block !text-[20px]"
            >
              {data?.about?.phoneNumber}
            </a>
          </div>
          <div className="text-[20px] mt-5 text-center mx-auto lg:mx-0 lg:text-start font-medium text-black dark:text-white">
            Connect with me
            <div className="flex mt-2 items-center justify-center gap-4">
              {data?.social_handles
                .filter((item) => item.enabled === true)
                .map((item) => (
                  <a
                    aria-label={item.platform}
                    key={item?._id}
                    href={item.url}
                    className="text-[#55e6a5] !text-[20px]"
                  >
                    <Image
                      aria-label={item?.platform}
                      src={item.image.url ?? ''}
                      alt={item.platform}
                      width={30}
                      height={30}
                    />
                  </a>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
