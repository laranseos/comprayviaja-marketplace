"use client";
import { slide3 } from "@/components/common/slider-options";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import Slider from "react-slick";

interface IBannerSliderProps {
  data: IImageBannerProps[];
  classSection:string
}
const BannerSlider: FC<IBannerSliderProps> = ({ data ,classSection }) => {
  return (
    <section className={classSection}>
      <Slider {...slide3} className="variable-width no-arrow">
        {data.map((data: IImageBannerProps,index) => (
          <div key={index}>
            <Img src={data.img} alt="" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerSlider;
