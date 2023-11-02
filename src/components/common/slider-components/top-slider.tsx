"use client";
import { FC } from "react";
import Rating from "@/components/common/rating";
import { slide4 } from "@/components/common/slider-options";
import { New } from "@/constant/constant";
import { RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const TopSlider: FC<ITopSliderProps> = ({ sliderData, titleClass }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <section className={titleClass}>
      <Slider {...slide4} className="category-4 no-arrow">
        {sliderData.map((data: ITopCategoryProps,index) => (
          <div key={index}>
            <div className="top_box">
              <div className="img-part">
                <a href="#">
                  <Img src={data.img} className="img-fluid" alt="" />
                </a>
              </div>
              <div className="right-content">
                <div>
                  <h5>
                    {data.title} <i className="fas fa-heart"></i>
                  </h5>
                  <Rating    />
                  <p>{data.desc}</p>
                  <h6>
                    <del>
                      {symbol}
                      {(currencyValue * data.price).toFixed(0)}
                    </del>
                    {symbol}
                    {(currencyValue * data.disc).toFixed(0)}
                  </h6>
                </div>
              </div>
              <div className="new-label">
                <span>{New}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TopSlider;
