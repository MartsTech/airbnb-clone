import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

const HeaderMenu = () => {
  return (
    <div className="flex items-center space-x-4 justify-end">
      <p className="hidden md:inline cursor-pointer">Become a host</p>
      <GlobeAltIcon className="h-6 cursor-pointer" />
      <div
        className="flex items-center space-x-2 border-2 p-2
        rounded-full cursor-pointer"
      >
        <MenuIcon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
    </div>
  );
};

export default HeaderMenu;
