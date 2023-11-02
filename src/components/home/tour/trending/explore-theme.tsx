"use client";
import { FC } from "react";
import { slide4 } from "@/components/common/slider-options";
import TitleComponent from "@/components/common/title/title";
import { ExploreThroughThemes, Rica } from "@/constant/constant";
import BackgroundSection from "@/utils/HOC/background-section";
import SliderOne from "@/components/common/slider-components/slider1";
import { themeData } from "@/data/home/tour/tour-data";

const ExploreTheme: FC = () => {
  return (
    <BackgroundSection titleClass="effect-cls effect-cls-up padding-cls full-banner parallax-img" img="/assets/images/tour/background/3.jpg" imgWidth={1920} imgHeight={1440} position="center">
      <div className="tourSection ratio_90">
        <div className="container tour-trending-title">
          <div className="row">
            <div className="col-12">
              <TitleComponent titleClass="title-3" title={Rica} subTitle={ExploreThroughThemes} span="best" />
              <SliderOne slideClass="slider-4 no-arrow" tourData={themeData} classTitle="tourBox" slideCom={slide4} />
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};
export default ExploreTheme;
