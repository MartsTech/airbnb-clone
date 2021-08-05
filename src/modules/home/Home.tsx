import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "../../utils/animations";
import HomeCards from "./cards/HomeCards";
import HomeExplore from "./explore/HomeExplore";
import HomePoster from "./poster/HomePoster";

const Home = () => {
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
        <Banner />
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
          <HomeExplore />
          <HomeCards />
          <HomePoster />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;