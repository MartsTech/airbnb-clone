import Image from "next/image";
import BannerButton from "./BannerButton";

const Banner = () => {
  return (
    <div
      className="relative h-[400px] sm:h-[500px] lg:h-[600px]
      xl:h-[700px] 2xl:h-[800px] -mt-24"
    >
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="banner"
      />
      <BannerButton />
    </div>
  );
};

export default Banner;
