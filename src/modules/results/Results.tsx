import DefaultLayout from "components/layouts/DefaultLayout";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "utils/animations";
import ResultsOffers from "./offers/ResultsOffers";

const Results = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
    >
      <DefaultLayout>
        <div className="flex">
          <ResultsOffers />
        </div>
      </DefaultLayout>
    </motion.div>
  );
};

export default Results;
