import ResultsOffersButtons from "./ResultsOffersButtons";
import ResultsOffersHeader from "./ResultsOffersHeader";
import ResultsOffersItems from "./ResultsOffersItems";

const ResultsOffers = () => {
  return (
    <section className="flex-grow pt-14 px-6">
      <ResultsOffersHeader />
      <ResultsOffersButtons />
      <ResultsOffersItems />
    </section>
  );
};

export default ResultsOffers;
