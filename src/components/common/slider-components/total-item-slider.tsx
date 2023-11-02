"use client";
import { FC } from "react";
import Slider from "react-slick";
import { slide6 } from "../slider-options";
import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";

const TotalItemSlider: FC<ITotalSliderProps> = ({ slideData }) => {
  return (
    <Slider {...slide6} className="no-arrow">
      {slideData.map((item: ITopCitiesProps,index) => (
        <div className="category-block" key={index}>
          <a href="#" tabIndex={0}>
            <div className="category-image">
              <Img src={item.img} className="img-fluid  bg-img" alt="" />
            </div>
          </a>
          <div className="category-details">
            <Link href="/pages/other-pages/about-us-2" tabIndex={0}>
              <h3>{item.name}</h3>
            </Link>
            <h6>{item.title}</h6>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TotalItemSlider;
