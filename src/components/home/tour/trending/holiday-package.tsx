"use client";
import { FC } from "react";
import SliderSix from "@/components/common/slider-components/slide6";
import TitleComponent from "@/components/common/title/title";
import { AmazingHolidayPackages, Rica } from "@/constant/constant";
import { holidayData } from "@/data/home/tour/tour-data";
import BackgroundSection from "@/utils/HOC/background-section";

const HolidayPackage: FC = () => {
  return (
    <BackgroundSection titleClass="effect-cls effect-cls-up padding-cls full-banner parallax-img" img="/assets/images/tour/background/3.jpg" imgWidth={1920} imgHeight={1198} position="center">
      <div className="menu-section">
        <div className="container tour-trending-title default-flight-slider">
          <TitleComponent titleClass="title-3" title={Rica} subTitle={AmazingHolidayPackages} span="tours" />
          <div className="row">
            <div className="col">
              <SliderSix slideData={holidayData} />
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default HolidayPackage;
