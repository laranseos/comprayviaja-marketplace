"use client";
import Img from "@/utils/BackgroundImageRatio";
import BannerImgComponent from "../common/banner";
import Slider from "react-slick";
import { slide1 } from "@/components/common/slider-options";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <section className="home_section slide-1 p-0">
      <Slider {...slide1}>
        <div>
          <BannerImgComponent bannerImg="/assets/images/tour/spain4.jpg" />
        </div>
        <div>
          <div className="home home-60">
            <Img src="/assets/images/tour/spain3.jpg" className="img-fluid  bg-img" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="home-content pt-0 mix-layout mrg-cls">
                    <div>
                      <h1>
                        splendid spain<span>rica</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
