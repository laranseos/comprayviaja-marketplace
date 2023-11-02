"use client";
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import { slide1 } from "@/components/common/slider-options";
import { banners } from "@/data/home/hotel/hotel-data";
import Link from "next/link";
import Img from "@/utils/BackgroundImageRatio";
import { useSelector } from "react-redux";
import { RootState } from '@/redux-toolkit/store';

const HomeBanner: React.FC = () => {
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  return (
    <section className="home_section hotel_layout slide-1 p-0">
      <Slider {...slide1}>
        {banners.map((banner: IBannerProps,index) => (
          <div key={index}>
            <div className="home">
              <Img src={banner.img} className="img-fluid d-none bg-img" alt="" />
              {/* <div className="home-content">
                <div>
                  <h1>{banner.title}</h1>
                  <h5>{banner.subTitle}</h5>
                  <h2>{banner.description}</h2>
                  <Link href={`/${i18LangStatus}/hotel/booking/booking-page`} className="btn btn-solid">{banner.btn}</Link>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default HomeBanner;
