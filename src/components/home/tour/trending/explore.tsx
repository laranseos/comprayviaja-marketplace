"use client";
import { FC } from "react";
import SliderCenter from "@/components/common/slider-components/slider-center";
import TitleComponent from "@/components/common/title/title";
import { ExploreThroughContinents, Rica } from "@/constant/constant";
import { exploreData } from "@/data/home/tour/tour-data";

const Explore: FC = () => {
  return (
    <section className="small-section">
      <TitleComponent titleClass="title-3" title={Rica} subTitle={ExploreThroughContinents} span="tours" />
      <div className="container ratio_59">
        <div className="row">
          <div className="col-md-12">
            <SliderCenter divClass="topTour_box mt-0" centerData={exploreData} titleClass="image-section" background={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
