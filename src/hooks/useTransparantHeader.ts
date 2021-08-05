import { useEffect, useState } from "react";

const useTransparentHeader = () => {
  const [transparent, setTransparent] = useState(true);

  const transitionNav = () => {
    if (window.scrollY > 91) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return [transparent] as const;
};

export default useTransparentHeader;
