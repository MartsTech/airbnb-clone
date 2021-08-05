import DefaultLayout from "components/layouts/DefaultLayout";
import ResultsOffers from "./offers/ResultsOffers";

const Results = () => {
  return (
    <div className="">
      <DefaultLayout>
        <div className="flex">
          <ResultsOffers />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Results;
