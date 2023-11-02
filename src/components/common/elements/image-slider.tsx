"use client"
import React, { FC } from "react";
import Slider from "react-slick";
import { propertySlider } from "../slider-options";
import Img from "@/utils/BackgroundImageRatio";
import { IImageSliderProps } from "./element";

const ImageSlider: FC<IImageSliderProps> = ({ images }) => {
  return (
    <>
        <Slider className="property-slider" {...propertySlider}>
          {images?.map((data, i) => (
            <div key={i} className="bg-size ">
              <Img src={data.img} className="img-fluid bg-img" alt="" />
            </div>
          ))}
        </Slider>
    </>
  );
};

export default ImageSlider;
