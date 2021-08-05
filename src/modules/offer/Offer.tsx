import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "utils/animations";
import OfferCover from "./OfferCover";
import OfferDetails from "./OfferDetails";
import OfferSuggestions from "./OfferSuggestions";

const Offer = () => {
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
        <div
          className="flex p-12 pt-20 md:px-20 lg:px-40
          xl:px-60 flex-col lg:flex-row"
        >
          <OfferCover />
          <OfferDetails />
        </div>
        <OfferSuggestions />
      </motion.div>
      <Footer />
    </>
  );
};

export default Offer;
