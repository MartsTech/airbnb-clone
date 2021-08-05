import SearchButtons from "./SearchButtons";
import SearchGuestsInput from "./SearchGuestsInput";
import SearchRangePicker from "./SearchRangePicker";
import { motion } from "framer-motion";

const SearchResults = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-1rem" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-1rem" }}
      className="fixed top-20 left-0 w-full bg-white shadow-md"
    >
      <div
        className="flex flex-col flex-shrink mx-auto
        max-w-[600px] pb-4"
      >
        <SearchRangePicker />
        <SearchGuestsInput />
        <SearchButtons />
      </div>
    </motion.div>
  );
};

export default SearchResults;
