import ReactMapGL from "react-map-gl";
import offersData from "data/resultsOffersItems.json";
import useMapCords from "hooks/useMapCords";
import ResultsMapMarker from "./ResultsMapMarker";

const ResultsMap = () => {
  const [viewport, setViewport] = useMapCords();

  return (
    <section className="hidden xl:inline-flex xl:min-w-[600px]">
      <ReactMapGL
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        {...viewport}
        onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
      >
        {offersData.map((offer) => (
          <ResultsMapMarker key={offer.id} offer={offer} />
        ))}
      </ReactMapGL>
    </section>
  );
};

export default ResultsMap;
