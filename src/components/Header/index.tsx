import useTransparentHeader from "hooks/useTransparantHeader";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const [transparent] = useTransparentHeader();

  return (
    <header
      className={`sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10 ${
        transparent ? "text-white" : "bg-white text-gray-500 shadow-md"
      }
      transition-colors duration-200 ease-in-out`}
    >
      <HeaderLogo />
      <HeaderSearch />
      <HeaderMenu />
    </header>
  );
};

export default Header;
