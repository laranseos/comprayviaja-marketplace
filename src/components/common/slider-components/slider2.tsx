"use client";
import { FC } from "react";
import Slider from "react-slick";
import { slide2 } from "../slider-options";
import { ReadMore } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import Button from "../btn";
import Link from "next/link";

const SliderTwo: FC<ISliderTwoProps> = ({ slideData, classBtn }) => {
  return (
    <Slider {...slide2} className="slide-2  no-arrow ">
      {slideData.map((data: IBlogVectorProps,index) => (
        <div key={index}>
          <div className="blog-box">
            <div className="img-part">
              <div>
                <Img src={data.image} className="img-fluid   w-100" alt="" />
              </div>
              <div className="blog-date">
                <div>
                  <h5>{data.date}</h5>
                  <h6>{data.month}</h6>
                </div>
              </div>
            </div>
            <div className="blog-content">
              <div>
                <h5>{data.title}</h5>
                <Link href="/pages/element-pages/blog"><p>{data.desc}</p></Link>
                <h6>{data.subDesc}</h6>
                <Link href="/pages/element-pages/blog"><Button btnClass={classBtn} name={ReadMore} /></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderTwo;
