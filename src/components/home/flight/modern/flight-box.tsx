"use client";
import { FC } from "react";
import { slide5 } from "@/components/common/slider-options";
import Image from "next/image";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Button from "@/components/common/btn";
import Link from 'next/link';

const FlightBox: FC<IFlightBoxProps> = ({ flightData }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <>
      {flightData.map((data: ITopDestinationProps,index2) => (
        <div className="flight-box" key={index2}>
          <div className="logo-section">
            <Image src={data.img} className="img-fluid" alt="" height={76} width={76} />
          </div>
          <div className="middle-section">
            <Slider {...slide5} className="flight-5 no-arrow">
              {data.childern.map((subData,index) => (
                <div key={index}>
                  <Link href="/flight/listing/top-filter">
                    <div className="flight-info">
                      <div>
                        <h4>{subData.airline}</h4>
                        <h5>
                          from {symbol}
                          {(currencyValue * subData.price).toFixed(0)}
                        </h5>
                        <i className="fas fa-plane"></i>
                        <h6>{subData.airline}airlines</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <div className="name-section">
            <div>
              <h5>{data.name}</h5>
              <h6>flights</h6>
              <Link href="/flight/listing/top-filter"><Button btnClass="btn btn-rounded btn-sm color1" name="check all" /></Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FlightBox;
