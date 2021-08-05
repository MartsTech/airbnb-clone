import { SearchIcon } from "@heroicons/react/solid";

const HeaderSearch = () => {
  return (
    <div
      className="flex items-center md:border-2 rounded-full py-2
      md:shadow-sm"
    >
      <input
        className="flex-grow pl-5 bg-transparent outline-none text-sm"
        placeholder="Start your search"
        type="text"
      />
      <SearchIcon
        className="hidden md:inline-flex h-8 bg-red-400
        text-white rounded-full p-2 cursor-pointer md:mx-2"
      />
    </div>
  );
};

export default HeaderSearch;
