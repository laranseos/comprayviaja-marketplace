"use client";
import { FC } from "react";
import BackgroundSection from "@/utils/HOC/background-section";
import { Book, New, OurVehicle } from "@/constant/constant";
import Slider from "react-slick";
import { ourVehicleData } from "@/data/home/cab/cab-data";
import { slide4 } from "@/components/common/slider-options";
import Rating from "@/components/common/rating";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import TitleThree from "@/components/common/title/title-three";
import Link from "next/link";

const OurVehicleComponent: FC = () => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);

  return (
    <BackgroundSection titleClass={"section-b-space dark-cls category-bg"} img={"/assets/images/cab/grey-bg.jpg"} imgWidth={0} imgHeight={0} position={""}>
      <div className="container">
        <TitleThree classTitle="title-1" title={New} subTitle={OurVehicle} />
        <div className="row">
          <div className="col">
            <Slider {...slide4} className="slider-4 arrow-classic">
              {ourVehicleData.map((data: IOurVehicleProps,index) => (
                <div key={index}>
                  <div className="category-block">
                    <div className="category-img">
                      <img src={data.img} alt="" className="img-fluid   " />
                    </div>
                    <Rating />
                    <h6>
                      start from{" "}
                      <span>
                        {symbol}
                        {(currencyValue * 25).toFixed(0)} / day
                      </span>
                    </h6>
                    <h4>{data.title}</h4>
                    <h5>{data.desc}</h5>
                    <Link href="/cab/booking" className="btn btn-lower btn-curve">
                      {Book} {symbol}
                      {(currencyValue * data.price).toFixed(0)}
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default OurVehicleComponent;
