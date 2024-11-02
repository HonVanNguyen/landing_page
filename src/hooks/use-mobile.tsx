import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLE_BREAKPOINT = 1024;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${TABLE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsTablet(window.innerWidth < TABLE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsTablet(window.innerWidth < TABLE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isTablet;
}