import cardsData from "data/homeCards.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { pageTransition, pageZoom } from "utils/animations";

const HomeCardsItems = () => {
  return (
    <div
      className="flex space-x-3 overflow-scroll scrollbar-hide
      p-3 -ml-3"
    >
      {cardsData.map(({ img, title }) => (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageZoom}
          transition={pageTransition}
          key={img}
          className="cursor-pointer hover:scale-105 transform
          transition duration-300 ease-out"
        >
          <div className="relative h-80 w-80">
            <Image src={img} layout="fill" className="rounded-xl" alt="card" />
          </div>
          <h3 className="text-2xl mt-3">{title}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default HomeCardsItems;
