import DefaultLayout from "components/layouts/DefaultLayout";
import ResultsMap from "./map/ResultsMap";
import ResultsOffers from "./offers/ResultsOffers";

const Results = () => {
  return (
    <DefaultLayout>
      <div className="flex">
        <ResultsOffers />
        <ResultsMap />
      </div>
    </DefaultLayout>
  );
};

export default Results;
