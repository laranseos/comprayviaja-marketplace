"use client";
import { tourSlider } from "@/components/common/slider-options";
import { FC, Fragment } from "react";
import Slider from "react-slick";
import OfferText from "./offer-text";
import { tourBannerData } from "@/data/home/tour/tour-data";
import Img from "@/utils/BackgroundImageRatio";

const HomeBanner: FC = () => {
  return (
    <Fragment>
      <section className="home_section  p-0">
        <Slider {...tourSlider} className="classic-slider no-arrow tour-modern">
          {tourBannerData.map((data: ITourBannerProps,index) => (
            <div key={index}>
              <div className="home ripple-effect">
                <Img src={data.img} className="img-fluid bg-img" alt="" />
              </div>
            </div>
          ))}
        </Slider>
        <OfferText />
      </section>
      <div className="error"></div>
    </Fragment>
  );
};

export default HomeBanner;
