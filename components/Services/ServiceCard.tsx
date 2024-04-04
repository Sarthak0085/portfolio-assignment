import { motion } from 'framer-motion';

interface IServiceCard {
  enabled: boolean;
  title: string;
  description: string;
  src: string;
  delay: number;
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
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 0.5, type: 'keyframes', delay: delay }}
        className="relative flex items-center justify-center w-full max-w-lg mb-[2rem] h-80 rounded-lg "
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-sm">
          <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
          <p className="text-white text-sm">{description}</p>
          <p className="text-md text-blue-500 dark:text-[#55e6a5]">{charge}</p>
        </div>
      </motion.div>
    )
  );
};

export default ServiceCard;
