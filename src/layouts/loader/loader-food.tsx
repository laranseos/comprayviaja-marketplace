"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const LoaderFood: React.FC<ILoaderProps> = ({ loaderTimeout }) => {
  const loadingTime = loaderTimeout;
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, loadingTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [show]);
  return (
    <div className={`loader-wrapper food-loader ${show ? "" : "loaderhide"}`}>
      <div className="loader">
        <Image src={"/assets/images/loader/food.gif"} alt="Animated GIF" width={300} height={200} />
      </div>
    </div>
  );
};

export default LoaderFood;
