"use client";
import { FC } from "react";
import TitleThree from "@/components/common/title/title-three";
import { topDealData } from "@/data/home/flight/flight-data";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Rating from "@/components/common/rating";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link';

const FlightRoute: FC = () => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <section className="routes-section ratio_landscape section-b-space">
      <div className="container">
        <TitleThree classTitle={"title-2"} subTitle="top flight routes..." span="within usa" desc="Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard......." />
        <div className="row">
          {topDealData.map((data: ITopProps,index) => (
            <div className="col-lg-3 col-6" key={index}>
              <div className="routes-box">
                <Link href="/flight/listing/left-sidebar" className="routes-img">
                  <Img src={data.image} alt="" className="img-fluid bg-img" />
                  <div className="price-round">
                    <div>
                      <h6>
                        <del>
                          {symbol}
                          {(currencyValue * 50).toFixed(0)}
                        </del>
                      </h6>
                      <h3>
                        {symbol}
                        {(currencyValue * 42).toFixed(0)}
                      </h3>
                    </div>
                  </div>
                  <div className="discount">
                    <h6>{data.discount}</h6>
                  </div>
                </Link>
                <div className="routes-content">
                  <div className="top-bar">
                    <Link href="/flight/listing/left-sidebar">
                      <h5>{data.title}</h5>
                    </Link>
                    <h6>arrival : 20:30</h6>
                  </div>
                  <div className="bottom-bar">
                    <h6>departure : 14:20</h6>
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightRoute;
