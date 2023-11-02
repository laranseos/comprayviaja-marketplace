"use client";

import { useEffect, useState } from "react";
import SkeletonHeader from "./common/header";
import SkeletonSearch from "./common/search-panel";
import SkeletonFilter from "./common/filter-panel";
import SkeletonSidebar from "./common/sidebar";
import SkeletonProducts from "./common/grid-view";

const PreLoader: React.FC<ILoaderProps> = ({ loaderTimeout, side }) => {
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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SkeletonFilter />
            </div>

            {side !== "no" && (
              <div className={`col-lg-3 ${side === "right" ? "order-1" : ""}`}>
                <SkeletonSidebar />
              </div>
            )}
            <div className={`${side === "no" ? "col-lg-12" : "col-lg-9"} ratio3_2`}>
              <a href="#" className="mobile-filter border-top-0">
                <h5></h5>
                <img src="/assets/images/icon/adjust.png" className="img-fluid" alt="" />
              </a>
              <SkeletonProducts />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreLoader;
