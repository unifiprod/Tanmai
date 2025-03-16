import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Scrollanimation.css";

export const ScrollAnimation = () => {
  const containerRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start 0.9", "end 1.1"],
  // });

  // const bottomShadowValue = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["-100%", "0%"]
  // );
  // const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  // const topShadowValue = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["-25%", "100%"]
  // );

  return (
    <section
      className="flex sm:flex-row flex-col-reverse sm:items-center h-full sm:gap-5 gap-10  items-start justify-center w-screen overflow-hidden"
      ref={containerRef}
    >
      <div className="sm:w-[40%] w-full text-left ml-[5%]">
        <h2 className="font-Arimo text-4xl">Our Mission and Values</h2>
        <div className="border-t-2 my-4 w-80 border-[#BF7E32]"></div>
        <h3 className="text-2xl font-Arimo mt-5">Mission</h3>
        <p className="font-Arimo text-lg flex flex-col gap-10">
          {" "}
          To redefine construction by delivering high-quality, customer-centric
          projects that inspire trust and set benchmarks in design and
          execution.
        </p>
        <h3 className="text-2xl font-Arimo mt-5"> Values</h3>
        <p className="font-Arimo text-lg flex flex-col gap-2">
          <span>
            . Integrity: Honest and transparent dealings at every stage.
          </span>
          <span>. Innovation: Creative solutions for modern challenges.</span>
        </p>
      </div>
      <div className="sm:w-[50%]  w-full flex items-center relative">
        {/* <motion.div className="img-inner" style={{ translateX: imageValue }}> */}
        <motion.div className="img-inner">
          {/* <motion.div
            className="bottom-shadow"
            style={{ translateX: bottomShadowValue }}
          /> */}
          <Image
            className="image"
            width={700}
            height={1000}
            src={"/krushi/g-10.jpg"}
            alt="a green plant"
          />
          {/* <motion.div
            className="top-shadow"
            style={{ translateX: topShadowValue }}
          /> */}
        </motion.div>
      </div>
    </section>
  );
};
