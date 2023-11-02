"use client";
import { FC } from "react";
import SliderSeven from "@/components/common/slider-components/slide7";
import TitleThree from "@/components/common/title/title-three";
import { AwesomePackage, NewOffer } from "@/constant/constant";
import { packageData } from "@/data/home/tour/tour-data";

const Package: FC = () => {
  return (
    <section className="category-wrapper section-b-space">
      <div className="container">
        <TitleThree title={NewOffer} subTitle={AwesomePackage} desc="Trips, experiences, and places. All in one service." classTitle="title-1 title-5" />
        <div className="row">
          <div className="col">
            <SliderSeven slideData={packageData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
