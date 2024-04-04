import { userData } from '@/utils/types';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const Services = ({ data }: { data: userData | null }) => {
  return (
    <section className="text-white/75 dark:bg-[#02050a] min-h-[100vh] pt-[4rem]  pb-[4rem]">
      <motion.h2
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.3 }}
        className="heading"
      >
        Ser<span className="text-orange-400">vices</span>
      </motion.h2>
      <div className="w-[90%] 500px:w-[70%] md:w-[90%] pt-[2rem] mx-auto grid grid-cols-1 sm:w-[60%] md:grid-cols-2 1150px:grid-cols-3 gap-[2rem]">
        {data?.services
          .filter((item) => item.enabled === true)
          .map((data, index: number) => (
            <ServiceCard
              key={index}
              delay={(index + 1) * 0.3}
              title={data.name}
              src={data.image.url}
              description={data.desc}
              enabled={data.enabled}
              charge={data.charge}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
