import OutsideClick from "components/Layouts/OutsideClick";
import useTransparentHeader from "hooks/useTransparantHeader";
import { observer } from "mobx-react-lite";
import Search from "modules/search/Search";
import { useStore } from "stores/store";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const [transparent] = useTransparentHeader();
  const { searchOpen, closeSearch } = useStore().searchStore;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200
      ease-in-out ${
        transparent && !searchOpen
          ? "text-white"
          : "bg-white text-gray-500 shadow-md"
      }`}
    >
      <OutsideClick opened={searchOpen} onClose={closeSearch}>
        <div className="grid grid-cols-3 p-5 md:px-10">
          <HeaderLogo />
          <HeaderSearch />
          <HeaderMenu />
          {searchOpen && <Search />}
        </div>
      </OutsideClick>
    </header>
  );
};

export default observer(Header);
