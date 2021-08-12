import { Marker, Popup } from "react-map-gl";
import offersItems from "data/resultsOffersItems.json";
import { useState } from "react";

interface ResultsMapMarkerProps {
  offer: typeof offersItems[0];
}

const ResultsMapMarker: React.FC<ResultsMapMarkerProps> = ({ offer }) => {
  const [selected, setSelected] = useState(false);
  const { lat, long, title } = offer;

  return (
    <>
      <Marker latitude={lat} longitude={long} offsetLeft={-20} offsetTop={-10}>
        <p
          onClick={() => setSelected(true)}
          className="cursor-pointer text-2xl animate-bounce"
          aria-label="push-pin"
          role="img"
        >
          📌
        </p>
      </Marker>
      {selected && (
        <Popup
          closeOnClick={true}
          onClose={() => setSelected(false)}
          latitude={lat}
          longitude={long}
        >
          {title}
        </Popup>
      )}
    </>
  );
};

export default ResultsMapMarker;
