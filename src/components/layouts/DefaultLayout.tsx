import Footer from "components/Footer";
import Header from "components/Header";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "utils/animations";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageSlide}
        transition={pageTransition}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
