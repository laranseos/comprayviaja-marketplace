"use client";
import { FC } from "react";
import BackgroundSection from "@/utils/HOC/background-section";
import Banners from "@/components/common/discount-banner/banner";

const FullBanner: FC = () => {
  return (
    <BackgroundSection titleClass={"banner-section full-banner overlay-banner"} img="/assets/images/tour/background/16.jpg" imgWidth={1905} imgHeight={588} position={"top"}>
      <Banners />
    </BackgroundSection>
  );
};

export default FullBanner;
