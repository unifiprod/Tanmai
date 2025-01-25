/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextReveal = ({ value }: any) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.5", "end 0.5"],
  });
  const words = value.split(" ");

  return (
    <main>
      <p ref={element} className="sm:text-5xl text-4xl flex flex-wrap">
        {words.map((word: any, i: any) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
            />
          );
        })}
      </p>
    </main>
  );
};

const Word = ({ word, range, progress }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <span className="opacity-5 absolute">{word}&nbsp;</span>
      <motion.span style={{ opacity }}>{word}&nbsp;</motion.span>
    </span>
  );
};

export default TextReveal;
