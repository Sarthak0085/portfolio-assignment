import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex items-center justify-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="w-8 h-8 rounded-full mx-1"
              style={{ originX: 0.5, originY: 0.5 }}
              animate={{
                backgroundColor: ["#fcbf1f", "#f472b6", "#60a5fa"],
                y: [0, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.08,
                duration: 0.8,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
