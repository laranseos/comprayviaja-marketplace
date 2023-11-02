"use client";
import { FC } from "react";
import BackgroundSection from "@/utils/HOC/background-section";
import BannerContent from "@/components/common/discount-banner/banner-content";

const FullBanner: FC = () => {
  return (
    <BackgroundSection img="/assets/images/background.jpg" imgWidth={1920} imgHeight={600} titleClass="full-banner" position="center">
      <div className="container">
        <div className="row">
          <div className="offset-xl-7 col-xl-5 col-lg-6 offset-lg-6 col-md-7 offset-md-5">
            <BannerContent type="tour" />
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default FullBanner;
