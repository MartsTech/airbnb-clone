import { createContext, useContext } from "react";
import SearchStore from "./searchStore";

interface Store {
  searchStore: SearchStore;
}

export const store: Store = {
  searchStore: new SearchStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
