import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useStore } from "stores/store";

const OfferCover: React.FC = () => {
  const { selectedOffer } = useStore().offerStore;

  if (!selectedOffer) {
    return null;
  }

  const { id, img, title } = selectedOffer;

  return (
    <motion.div
      layoutId={id}
      className="relative rounded-2xl overflow-hidden bg-white
      h-[400px] md:h-[600px] w-[400px] md:w-[700px]"
    >
      <Image
        layout="fill"
        objectFit="contain"
        src={img}
        alt={title}
        className="shadow-lg rounded-2xl"
      />
    </motion.div>
  );
};

export default observer(OfferCover);
