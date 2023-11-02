"use client";
import { FC } from "react";
import Button from "@/components/common/btn";
import { slide4 } from "@/components/common/slider-options";
import TitleTwo from "@/components/common/title/title-two";
import { ReadMore } from "@/constant/constant";
import { dealData } from "@/data/home/flight/flight-data";
import Slider from "react-slick";
import Link from 'next/link';

const Airline: FC = () => {
  return (
    <section className="pt-0 detail-section no-bg-detail">
      <div className="xs-section">
        <div className="container-fluid">
          <TitleTwo title="never miss popular deals" titleClass="title-basic" />
          <Slider {...slide4} className="slider-4">
            {dealData.map((data: IAirlineProps,index) => (
              <div key={index}>
                <div className="detail-box">
                  <div className="upper-part">
                    <h6>{data.title}</h6>
                    <h2>{data.desc}</h2>
                    <h5>enjoy extra baggage allowance</h5>
                  </div>
                  <Link href="/pages/other-pages/contact-us-1"><Button btnClass="btn btn-rounded btn-sm color1" name={ReadMore} /></Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Airline;
