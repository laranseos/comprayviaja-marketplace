"use client";
import BackgroundSection from "@/utils/HOC/background-section";
import { FC } from "react";

import { DealsOnBooking, New } from "@/constant/constant";
import { dealBookingData } from "@/data/home/cab/cab-data";
import Image from "next/image";
import Slider from "react-slick";

import BackgroundDiv from "@/utils/HOC/background-div";
import TitleComponent from "@/components/common/title/title";
import { slide3 } from "@/components/common/slider-options";

const BookingDeal: FC = () => {
  return (
    <BackgroundSection titleClass={"section-b-space deals ratio3_2"} img={"/assets/images/cab/app-bg.jpg"} imgWidth={0} imgHeight={0} position={"center"}>
      <div className="container-fluid p-0">
        <TitleComponent titleClass="title-1" title={New} subTitle={DealsOnBooking} h2Class="text-white" />
        <div className="row">
          <div className="col">
            <Slider {...slide3} className="slide-3 no-arrow">
              {dealBookingData.map((data,index) => (
                <div key={index}>
                  <div className="deals-box row">
                    <div className="left-portion col">
                      <div className="deals-content">
                        <div className="detail">
                          <h3>{data.title}</h3>
                          <h2>
                            ${data.price} <span> / per day</span>
                          </h2>
                        </div>
                        <Image src="/assets/images/barcode.png" alt="" className="img-fluid  " height={300} width={47} />
                      </div>
                    </div>
                    <BackgroundDiv titleClass="deals-img col bg-size" img={data.img} divImg={data.img} imgHeight={446} imgWidth={297} displayClass="none" />
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

export default BookingDeal;
