import useHandleSearchQuery from "../hooks/useHandleSearchQuery";
import Results from "../modules/results/Results";
import Head from "next/head";

const ResultsPage = () => {
  const [valid] = useHandleSearchQuery();

  if (!valid) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      <Results />
    </>
  );
};

export default ResultsPage;
