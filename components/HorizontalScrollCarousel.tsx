import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface HorizontalScrollCarouselProps {
  cards: string[];
}

export const HorizontalScrollCarousel: React.FC<
  HorizontalScrollCarouselProps
> = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-[#E6E6E6]">
      <div className="sticky top-0 flex h-[80vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = (card: any) => {
  return (
    <div
      key={card}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.card})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg">
          {JSON.stringify(card.card)}
        </p>
      </div> */}
    </div>
  );
};

// const cards = [
//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];
