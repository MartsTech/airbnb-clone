import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useStore } from "stores/store";

const SearchButtons = () => {
  const { getSeachQuery, resetSearch } = useStore().searchStore;
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "results",
      query: getSeachQuery,
    });
    resetSearch();
  };

  return (
    <div className="flex">
      <button className="flex-grow text-gray-500" onClick={resetSearch}>
        Cancle
      </button>
      <button className="flex-grow text-red-400" onClick={search}>
        Search
      </button>
    </div>
  );
};

export default observer(SearchButtons);
