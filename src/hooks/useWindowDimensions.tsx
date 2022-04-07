import { useEffect, useState } from "react";

const getDimensions = () => {
  const { innerWidth: width, innerHeight: heigth } = window;
  return {
    width,
    heigth,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return {
    width: windowDimensions.width,
    heigth: windowDimensions.heigth,
  };
};

export default useWindowDimensions;
