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
      className="w-full sm:h-[100vh] h-full sm:py-24 py-10 flex flex-col sm:gap-1 gap-5 items-center justify-center"
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
        className="sm:w-3/4 w-full grid items-start justify-start sm:grid-cols-2 grid-cols-1 sm:py-10 py-5 px-5 sm:gap-10 gap-5"
        variants={containerVariants}
      >
        {why.map((item) => (
          <motion.div
            key={item.title}
            className="flex items-start justify-start sm:gap-5 gap-2 text-black"
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
            <div className="flex flex-col items-start justify-start gap-2">
              <h3 className="font-arimo sm:text-3xl text-xl">{item.title}</h3>
              <p className="font-arimo text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
