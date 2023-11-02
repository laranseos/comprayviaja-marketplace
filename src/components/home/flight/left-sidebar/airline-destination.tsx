"use client";
import { FC } from "react";
import { slide5 } from "@/components/common/slider-options";
import { airlineDestinationData } from "@/data/home/flight/flight-data";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";

const AirlineDestination: FC = () => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <section className="pt-0 xs-section classic-section">
      <div className="container-fluid">
        <div className="title-basic">
          <h2>never miss popular deals</h2>
        </div>
        <Slider {...slide5} className="flight-5">
          {airlineDestinationData.map((data,index) => (
            <div key={index}>
              <div className="classic-box">
                <div className="top-part">
                  <div className="top">
                    <h6>{data.place}</h6>
                    <span>18 march, 2023</span>
                  </div>
                  <div className="bottom">
                    <h6>{data.place1}</h6>
                  </div>
                  <div className="plane-updown">
                    <Img src="/assets/images/icon/plane.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="bottom-part">
                  <h6>
                    starting from {symbol}
                    {(currencyValue * 250).toFixed(0)}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AirlineDestination;
