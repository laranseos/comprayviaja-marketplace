"use client";
import { FC } from "react";
import BannerContent from "@/components/common/discount-banner/banner-content";
import Img from "@/utils/BackgroundImageRatio";

const DiscountBanner: FC = () => {
  return (
    <section className="p-0 banner-section full-banner zindex-1">
      <div className="section-b-space section-t-space black-layer">
        <Img src="/assets/images/flights/sky2.jpg" className="bg-img" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="place-image">
                <Img src="/assets/images/flights/map.png " alt="" className="img-fluid  wow zoomIn" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <BannerContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
