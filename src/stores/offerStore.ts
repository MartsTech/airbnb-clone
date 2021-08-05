import resultsOffersItems from "data/resultsOffersItems.json";
import { makeAutoObservable } from "mobx";

class OfferStore {
  selectedOffer: typeof resultsOffersItems[0] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedOffer = (offer: typeof resultsOffersItems[0]) => {
    this.selectedOffer = offer;
  };
}

export default OfferStore;
