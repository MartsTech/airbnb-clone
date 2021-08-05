import Button from "../../components/buttons/Button";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";

const OfferDetails: React.FC = () => {
  const { selectedOffer } = useStore().offerStore;

  if (!selectedOffer) {
    return null;
  }

  const { title, description, price } = selectedOffer;

  return (
    <div className="p-12 pr-4 flex flex-col">
      <h2
        className="line-clamp-3 text-xl sm:text-2xl md:text-3xl
        lg:text-4xl xl:text-5xl w-11/12 font-bold"
      >
        {title}
      </h2>

      <div className="grid grid-cols-2 w-3/4 mt-4 -gap-4">
        {description.split("·").map((word) => (
          <p
            key={word}
            className="my-4 relative text-justify leading-7
            text-lg"
          >
            {word}
          </p>
        ))}
      </div>

      <div className="mt-auto">
        <Button className="my-4">Reserve</Button>
        <div className="flex items-baseline m-1 space-x-1">
          <h4 className="text-2xl font-black">${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default observer(OfferDetails);
