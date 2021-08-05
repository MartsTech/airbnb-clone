import Banner from "components/banner/Banner";
import DefaultLayout from "components/layouts/DefaultLayout";
import HomeCards from "./cards/HomeCards";
import HomeExplore from "./explore/HomeExplore";
import HomePoster from "./poster/HomePoster";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        <HomeExplore />
        <HomeCards />
        <HomePoster />
      </div>
    </DefaultLayout>
  );
};

export default Home;
