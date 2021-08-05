import { SearchIcon } from "@heroicons/react/solid";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";

const HeaderSearch = () => {
  const { searchInput, setSearchInput, searchPlaceholder } =
    useStore().searchStore;

  return (
    <div
      className="flex items-center md:border-2 rounded-full py-2
      md:shadow-sm"
    >
      <input
        className="flex-grow pl-5 bg-transparent outline-none text-sm"
        placeholder={searchPlaceholder || `Start your search`}
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <SearchIcon
        className="hidden md:inline-flex h-8 bg-red-400
        text-white rounded-full p-2 cursor-pointer md:mx-2"
      />
    </div>
  );
};

export default observer(HeaderSearch);
