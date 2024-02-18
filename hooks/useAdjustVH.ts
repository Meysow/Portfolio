"use client";

import { useEffect } from "react";

const useAdjustVH = (): void => {
  useEffect(() => {
    const adjustVH = (): void => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    adjustVH();
    window.addEventListener("resize", adjustVH);
    window.addEventListener("orientationchange", adjustVH);

    return (): void => {
      window.removeEventListener("resize", adjustVH);
      window.removeEventListener("orientationchange", adjustVH);
    };
  }, []);
};

export default useAdjustVH;
