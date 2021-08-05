import { useRouter } from "next/router";
import { searchQuery } from "../../../types/searchQuery";
import { getDateRange } from "../../../utils/getDateRange";

const ResultsOffersHeader = () => {
  const router = useRouter();
  const { location, quests, startDate, endDate } = router.query as searchQuery;

  const range = getDateRange(startDate, endDate);

  return (
    <>
      <p className="text-xs">
        300+ Stays - {range} - for {quests} quests
      </p>
      <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
    </>
  );
};

export default ResultsOffersHeader;
