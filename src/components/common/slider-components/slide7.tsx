"use client";
import { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { slide2 } from "../slider-options";
import Rating from "../rating";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Link from "next/link";

const SliderSeven: FC<ISlideSevenProps> = ({ slideData }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <Slider {...slide2} className="slide-2 arrow-classic">
      {slideData.map((data: IPackageProps,index) => (
        <div key={index}>
          <div className="category-wrap">
            <div className="category-img">
              <Link href="/home/tour/trending">
                <Image src={data.img} alt="" className="img-fluid  " width={230} height={230} />
              </Link>
              <div className="side-effect"></div>
            </div>
            <div className="category-content">
              <div>
                <div className="top">
                  <Link href="/home/tour/trending">
                    <h3>{data.title}</h3>
                  </Link>
                  <h6>{data.badge}</h6>
                  {data.classIcon && (
                    <div className="like-cls">
                      <i className="fas fa-heart">
                        <span className="effect"></span>
                      </i>
                    </div>
                  )}
                </div>
                <Rating />
                <p>{data.desc}</p>
                <div className="bottom">
                  <h3>
                    <del>
                      {symbol}
                      {(currencyValue * data.price).toFixed(0)}
                    </del>
                    {symbol}
                    {(currencyValue * data.disc).toFixed(0)}
                  </h3>
                  <h6 className="coupon-code">
                    Coupon code: <span>{data.couponCode}</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderSeven;
