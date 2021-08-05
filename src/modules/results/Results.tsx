import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "utils/animations";
import ResultsOffers from "./offers/ResultsOffers";

const Results = () => {
  return (
    <>
      <Header />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageSlide}
        transition={pageTransition}
      >
        <div className="flex">
          <ResultsOffers />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Results;
