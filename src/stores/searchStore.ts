import { makeAutoObservable, reaction } from "mobx";
import { searchQuery } from "../types/searchQuery";

class SearchStore {
  searchOpen = false;
  searchInput = "";
  quests = 1;
  startDate = new Date();
  endDate = new Date();
  searchPlaceholder: string | null = null;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.searchInput,
      (searchInput) => {
        if (searchInput.length > 0) {
          this.searchOpen = true;
        } else {
          this.searchOpen = false;
        }
      }
    );
  }

  get getSeachQuery(): searchQuery {
    return {
      location: this.searchInput,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
      quests: this.quests.toString(),
    };
  }

  closeSearch = () => {
    this.searchOpen = false;
  };

  setSearchInput = (input: string) => {
    this.searchInput = input;
  };

  setQuests = (quests: number) => {
    if (quests > 0) {
      this.quests = quests;
    }
  };

  resetSearch = () => {
    this.searchInput = "";
    this.quests = 1;
    this.startDate = new Date();
    this.endDate = new Date();
  };

  handleSelectDates = (ranges: any) => {
    this.startDate = ranges.selection.startDate;
    this.endDate = ranges.selection.endDate;
  };

  setSearchPlaceholder = (location: string, range: string, quests: string) => {
    this.searchPlaceholder = `${location} | ${range} | ${quests}`;
  };
}

export default SearchStore;
