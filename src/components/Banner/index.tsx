import Image from "next/image";
import BannerButton from "./BannerButton";

const Banner = () => {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] 
      xl:h-[600px] 2xl:h-[700px] -mt-24"
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
