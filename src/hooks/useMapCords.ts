import offersData from "data/resultsOffersItems.json";
import { getCenter } from "geolib";
import { useState } from "react";

const useMapCords = () => {
  const cordinates = offersData.map((offer) => ({
    latitude: offer.lat,
    longitude: offer.long,
  }));

  const center = getCenter(cordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center ? center.latitude : 37.7577,
    longitude: center ? center.longitude : -122.4376,
    zoom: 11,
  });

  return [viewport, setViewport] as const;
};

export default useMapCords;
