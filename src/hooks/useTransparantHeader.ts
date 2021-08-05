import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useTransparentHeader = () => {
  const [transparent, setTransparent] = useState(false);
  const router = useRouter();

  const transitionNav = () => {
    if (window.scrollY > 91) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  };

  useEffect(() => {
    if (router.pathname === "/") {
      setTransparent(true);
      window.addEventListener("scroll", transitionNav);
      return () => window.removeEventListener("scroll", transitionNav);
    }
    return () => {};
  }, [router.pathname]);

  return [transparent] as const;
};

export default useTransparentHeader;
