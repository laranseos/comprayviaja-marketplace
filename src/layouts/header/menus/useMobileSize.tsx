"use client";
// /**
//  * This function will return a boolean value of true or false depending on the size of the window.
//  * @returns A boolean value.
//  */

import { useState, useEffect } from "react";

function useMobileSize() {
  const [mobileSize, setMobileSize] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        const breakpoint = 1200;
        const isMobile = breakpoint > window.innerWidth;
        setMobileSize(isMobile);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mobileSize;
}

export default useMobileSize;
