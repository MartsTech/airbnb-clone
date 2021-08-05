import Image from "next/image";
import { useRouter } from "next/router";

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <div className="relative flex items-center h-10 cursor-pointer my-auto">
      <Image
        src="https://links.papareact.com/qd3"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        alt="logo"
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default HeaderLogo;
