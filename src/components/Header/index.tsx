import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white
      shadow-md p-5 md:px-10"
    >
      <HeaderLogo />
      <HeaderSearch />
      <HeaderMenu />
    </header>
  );
};

export default Header;
