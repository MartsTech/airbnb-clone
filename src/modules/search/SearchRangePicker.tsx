import { observer } from "mobx-react-lite";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useStore } from "../../stores/store";

const SearchRangePicker = () => {
  const { startDate, endDate, handleSelectDates } = useStore().searchStore;

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <DateRangePicker
      rangeColors={["#FD5B6A"]}
      minDate={new Date()}
      ranges={[selectionRange]}
      onChange={handleSelectDates}
    />
  );
};

export default observer(SearchRangePicker);
