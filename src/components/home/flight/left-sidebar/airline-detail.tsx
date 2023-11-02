"use client";
import { FC } from "react";
import { slide4 } from "@/components/common/slider-options";
import TitleTwo from "@/components/common/title/title-two";
import { airlineDetail } from "@/data/home/flight/flight-data";
import Img from "@/utils/BackgroundImageRatio";
import Slider from "react-slick";
import Link from 'next/link';

const AirlineDetail: FC = () => {
  return (
    <section className="pt-0 xs-section classic-section flight-leftsidebar-section">
      <div className="container-fluid">
        <TitleTwo title="popular destination" titleClass="title-basic" />
        <div className="product-wrapper-grid special-section grid-box ratio3_2">
          <Slider {...slide4} className="slider-4 content grid">
            {airlineDetail.map((data: IAirlineDetailProps,index) => (
              <div className="grid-item" key={index}>
                <div className="special-box p-0">
                  <div className="special-img">
                    <Link href="/flight/listing/right-sidebar">
                      <Img src={data.img} className="img-fluid bg-img" alt="" />
                    </Link>
                    <div className="top-icon">
                      <a href="#" className="" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wishlist">
                        <i className="far fa-heart"></i>
                      </a>
                    </div>
                    <div className="content-inner">
                      <a href="#">
                        <h5>{data.title}</h5>
                      </a>
                      <h6>starting $220</h6>
                    </div>
                  </div>
                  {data.class && <div className="label-offer">{data.label}</div>}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AirlineDetail;
