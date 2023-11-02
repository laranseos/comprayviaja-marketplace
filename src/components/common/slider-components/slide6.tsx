"use client";
import { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from 'next/link';
import Rating from "../rating";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";


const SliderSix: FC<ISlideSixProps> = ({ slideData }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
   const slide3 = {
    adaptiveHeight: true,
    // centerMode: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    // centerMode: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };
  return (
    <Slider {...slide3} className="slide-3 no-arrow">
      {slideData?.map((data: IHolidayProps,index) => (
        <div key={index}>
          <div className="menu-box">
            <div className="top-bar">
              <Image src={data.titleImg} className="img-fluid" alt="" width={440} height={120} />
              <h2>{data.place}</h2>
              <div className="decorate">{data.place}</div>
            </div>
            <div className="bottom-bar">
              {data.package.map((subData, i) => (
                <div className="menu-bar" key={i}>
                  <Link href="/pages/other-pages/about-us-2">
                    <Image src={subData.img} className="img-fluid" alt="" width={90} height={90} />
                  </Link>
                  <div className="content">
                    <Link href="/pages/other-pages/about-us-2">
                      <h5>{subData.title}</h5>
                    </Link>
                    <Rating rang="4.8" />
                    <p>{subData.city}</p>
                    <h6>
                      <del>
                        {symbol}
                        {(currencyValue * subData.price).toFixed(0)}
                      </del>{" "}
                      {symbol}
                      {(currencyValue * subData.disc).toFixed(0)}
                      {subData.label === "famous" ? <label>famous</label> : <label className="red">-25%</label>}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderSix;
