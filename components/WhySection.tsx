import { motion } from "framer-motion";
import Image from "next/image";

import { why } from "@/config/why";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const WhySection = () => {
  return (
    <motion.section
      className="w-full h-[100vh] sm:py-24 py-10 flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animates only once when 30% of the section is visible
      variants={containerVariants}
    >
      <motion.h2
        className="font-prata text-black sm:text-4xl text-3xl text-center"
        variants={itemVariants}
      >
        Why TANMAI ventures ?
      </motion.h2>
      <motion.div
        className="grid sm:grid-cols-2 grid-cols-1 sm:py-10 py-5 sm:px-20 px-5 sm:gap-10 gap-5"
        variants={containerVariants}
      >
        {why.map((item) => (
          <motion.div
            key={item.title}
            className="flex items-center justify-between sm:gap-5 gap-2 text-black"
            variants={itemVariants}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={70}
              height={70}
              className="hidden sm:block"
            />
            <Image
              src={item.icon}
              alt={item.title}
              width={50}
              height={70}
              className="block sm:hidden"
            />
            <div>
              <h3 className="font-arimo sm:text-3xl text-xl">{item.title}</h3>
              <p className="font-arimo text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
