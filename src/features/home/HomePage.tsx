import Banner from "components/Banner";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeCards from "./HomeCards";
import HomeExplore from "./HomeExplore";
import HomeLarge from "./HomeLarge";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <HomeExplore />
        <HomeCards />
        <HomeLarge />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
