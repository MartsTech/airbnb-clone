import { createContext, useContext } from "react";
import OfferStore from "./offerStore";
import SearchStore from "./searchStore";

interface Store {
  searchStore: SearchStore;
  offerStore: OfferStore;
}

export const store: Store = {
  searchStore: new SearchStore(),
  offerStore: new OfferStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
