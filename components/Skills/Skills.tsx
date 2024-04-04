import { userData } from '@/utils/types';
import { motion } from 'framer-motion';
import SkillsItem from './SkillsItem';

const Skills = ({ data }: { data: userData | null }) => {
  return (
    <section className="flex flex-col pt-[2rem] md:pt-[4rem] gap-5 pb-[4rem] text-white/75 dark:bg-black/90">
      <motion.h2
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 0.5, type: 'spring', delay: 0.3 }}
        className="heading"
      >
        Ski<span className="text-orange-400">lls</span>
      </motion.h2>
      <div className="w-[95%] pt-[2rem] grid grid-cols-1 lg:grid-cols-2 gap-[2rem] items-center">
        {data?.skills
          .sort((a, b) => a.sequence - b.sequence)
          .map((item, index: number) => (
            <SkillsItem
              key={index}
              delay={(index + 1) * 0.1}
              image={item.image.url}
              skill={item.name}
              enabled={item.enabled}
              level={item.percentage}
            />
          ))}
      </div>
    </section>
  );
};

export default Skills;
