import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

export const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-800 px-6 md:px-24 xl:px-36 mx-auto">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="flex justify-center h-screen flex-col lg:mx-auto"
        >
          <motion.p
            variants={item}
            className="font-noto md:text-[16px] text-gray-800 dark:text-white font-medium text-sm lg:text-base mb-5"
          >
            Hey there, I'm
          </motion.p>
          <motion.p
            variants={item}
            className="font-sans text-gray-800 dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-5"
          >
            Sanjeev JayaSurya.
          </motion.p>
          <motion.p
            variants={item}
            className="font-sans text-gray-800 dark:text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            Engineering @ Uni.
          </motion.p>
          <motion.p
            variants={item}
            className="font-sans text-gray-800 md:text-xl dark:text-white text-base lg:text-lg max-w-lg"
          >
            Description here
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
