// Takes in a media query and returns a boolean that indicates whether the viewport width is less than the query value.
import { useState, useEffect } from "react";

export const useMediaQuery = (width) => {
  const [currentViewportWidth, setCurrentViewportWidth] = useState(
    window.innerWidth
  );

  useEffect(() => {
    const updateViewportWidth = () => {
      setCurrentViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateViewportWidth);

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return currentViewportWidth < width;
};
