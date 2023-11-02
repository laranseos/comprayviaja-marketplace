"use client";
import { FC } from "react";
import Rating from "@/components/common/rating";
import TitleThree from "@/components/common/title/title-three";
import { New } from "@/constant/constant";
import { ticketData } from "@/data/home/flight/flight-data";
import Img from "@/utils/BackgroundImageRatio";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Link from 'next/link';

const AirlineTickets: FC = () => {
const slide3 = {
    adaptiveHeight: true,
  // centerMode: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
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
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <section className="price-section section-b-space ratio_square default-layout-slider">
      <div className="container-fluid">
        <TitleThree classTitle={"title-2"} subTitle="cheap..." span="airline tickets" desc="Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard......." />
        <Slider {...slide3} className="slide-3 no-arrow">
          {ticketData.map((data,index) => (
            <div key={index}>
              <div className="price-box">
                <div className="price-img">
                <Img src={data.image} className="bg-img img-fluid" alt="" />
                  <span className="label">{New}</span>
                </div>
                <div className="price-content ">
                  <div className="price-title">
                    <Link href="/flight/listing/left-sidebar">
                      <h3>{data.title}</h3>
                    </Link>
                    <div className="like-cls">
                      <i className="fas fa-heart">
                        <span className="effect"></span>
                      </i>
                    </div>
                  </div>
                  <Rating />
                  {data.place.map((item,index2) => (
                    <div className="price" key={index2}>
                      <Link href="/flight/listing/left-sidebar">
                        <h6>{item.city}</h6>
                      </Link>
                      <h5>
                        <span>from</span>
                        {symbol}
                        {(currencyValue * item.price).toFixed(0)}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AirlineTickets;
