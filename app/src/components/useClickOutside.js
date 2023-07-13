import { useEffect, useRef } from "react";

const useClickOutside = (callBack, show) => {
  const nav = useRef(null);

  useEffect(() => {
    console.log(nav);
    const navEl = nav.current;
    const handleClickOutside = (e) => {
      if (!navEl.contains(e.target)) {
        callBack();
      }
    };

    if (show) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  return nav;
};

export default useClickOutside;