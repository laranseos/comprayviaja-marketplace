"use client";
import { FC } from "react";
import Slider from "react-slick";
import { slide3 } from "../slider-options";
import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";

const SliderFive: FC<ISliderFiveProps> = ({ slideData, round, iconColor }) => {
  return (
    <Slider {...slide3} className="no-arrow">
      {slideData.map((data: IBlogProps,index) => (
        <div key={index}>
          <div className={`blog-wrap ${round && "rounded - 0"}`}>
            <div className="blog-image">
              <Img src={data.img} className=" bg-img" alt="" />
              <div className={`blog-label ${round && "rounded - 0"}`}>
                <div>
                  <h3>{data.date}</h3>
                  <h6>{data.month}</h6>
                </div>
              </div>
            </div>
            <div className="blog-details">
              <h6>
                <i className={`fas fa-map-marker-alt ${iconColor && "color-1"}`}></i>
                {data.location}
              </h6>
              <Link href="/pages/element-pages/blog">
                <h5>{data.title}</h5>
              </Link>
              <p>{data.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderFive;
