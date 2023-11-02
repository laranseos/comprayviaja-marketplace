"use client";
import { FC } from "react";
import Slider from "react-slick";
import { slide6 } from "../slider-options";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link';

const InstaSlider: FC<IInstaSliderProps> = ({ instagramData }) => {
  return (
    <div className="slide-6 no-arrow">
      <Slider {...slide6}>
        {instagramData.map((image: IInstagramProps,index) => (
          <div key={index}>
            <Link href="/pages/portfolio/grid-2">
              <div className="instagram-box">
                <Img src={image.src} alt="" className="img-fluid bg-img" />
                <div className="overlay">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstaSlider;
