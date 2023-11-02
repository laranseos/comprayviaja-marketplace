"use client";

import { useEffect, useState } from "react";
import SkeletonHeader from "./common/header";
import SkeletonSearch from "./common/search-panel";
import SkeletonFilter from "./common/filter-panel";
import SkeletonMap from "./common/map";

const MapLoader: React.FC<ILoaderProps> = ({ loaderTimeout, side }) => {
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
    <div className={`skeleton_loader ${show ? "" : "loaderhide"}`}>
      <SkeletonHeader />
      <div className="breadcrumb-section dark-bg"></div>
      <SkeletonSearch />
      <section className="xs-section bg-inner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <SkeletonFilter />
            </div>
            <SkeletonMap side={side} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapLoader;
