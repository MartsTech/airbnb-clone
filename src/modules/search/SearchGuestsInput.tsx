import { UsersIcon } from "@heroicons/react/solid";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";

const SearchGuestsInput = () => {
  const { quests, setQuests } = useStore().searchStore;

  return (
    <div className="flex items-center border-b mb-4">
      <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
      <UsersIcon className="h-5" />
      <input
        className="w-12 pl-2 text-lg text-red-400 outline-none"
        min={1}
        type="number"
        value={quests}
        onChange={(e) => setQuests(parseInt(e.target.value))}
      />
    </div>
  );
};

export default observer(SearchGuestsInput);
