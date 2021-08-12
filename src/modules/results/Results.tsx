import DefaultLayout from "components/layouts/DefaultLayout";
import ResultsOffers from "./offers/ResultsOffers";

const Results = () => {
  return (
    <DefaultLayout>
      <div className="flex">
        <ResultsOffers />
      </div>
    </DefaultLayout>
  );
};

export default Results;
