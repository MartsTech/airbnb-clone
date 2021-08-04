import Head from "next/head";
import HomePage from "features/home/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
