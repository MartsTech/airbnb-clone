import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStore } from "stores/store";
import { searchQuery } from "types/searchQuery";
import { getDateRange } from "utils/getDateRange";

const useHandleSearchQuery = () => {
  const { setSearchPlaceholder } = useStore().searchStore;

  const { location, startDate, endDate, quests } = useRouter()
    .query as searchQuery;

  useEffect(() => {
    if (location && startDate && endDate && quests) {
      const range = getDateRange(startDate, endDate);
      setSearchPlaceholder(location, range, quests);
    }
  }, [location, startDate, endDate, quests, setSearchPlaceholder]);

  if (!location || !startDate || !endDate || !quests) {
    return [false] as const;
  }

  return [true] as const;
};

export default useHandleSearchQuery;
