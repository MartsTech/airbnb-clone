import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div
      className="relative flex items-center h-10 cursor-pointer 
      my-auto"
    >
      <Image
        src="https://links.papareact.com/qd3"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
      />
    </div>
  );
};

export default HeaderLogo;
