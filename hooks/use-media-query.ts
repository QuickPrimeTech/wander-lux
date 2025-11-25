import { useEffect, useState } from "react";

export function useMediaQuery() {
  const [mounted, setMounted] = useState(false);

  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    setMounted(true);

    const queries = {
      mobile: window.matchMedia("(max-width: 767px)"),
      tablet: window.matchMedia("(min-width: 768px) and (max-width: 1023px)"),
      desktop: window.matchMedia("(min-width: 1024px)"),
    };

    const update = () => {
      setState({
        isMobile: queries.mobile.matches,
        isTablet: queries.tablet.matches,
        isDesktop: queries.desktop.matches,
      });
    };

    // Initial run
    update();

    // Add listeners
    Object.values(queries).forEach((mq) =>
      mq.addEventListener("change", update)
    );

    return () => {
      Object.values(queries).forEach((mq) =>
        mq.removeEventListener("change", update)
      );
    };
  }, []);

  return mounted
    ? state
    : { isMobile: false, isTablet: false, isDesktop: false };
}
