"use client";
import { useEffect, useState } from "react";

const GoodLoader: React.FC<ILoaderProps> = ({ loaderTimeout }) => {
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
    <div className={`loader-wrapper loader-text ${show ? "" : "loaderhide"}`}>
      <div className="loader">
        <div className="typewriter">
          <h1>Good Things Take Time</h1>
        </div>
      </div>
    </div>
  );
};

export default GoodLoader;
