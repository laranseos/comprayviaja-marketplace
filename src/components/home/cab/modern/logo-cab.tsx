"use client";
import { FC } from "react";
import { cabLooData } from "@/data/home/cab/cab-data";
import BackgroundDiv from "@/utils/HOC/background-div";
import Slider from "react-slick";
import { slide5 } from "@/components/common/slider-options";
import TitleThree from "@/components/common/title/title-three";
import Img from "@/utils/BackgroundImageRatio";
import { Rica } from "@/constant/constant";

const LogoCab: FC<IGalleryPageProps> = ({ title }) => {
  return (
    <section className="">
      {title && <TitleThree title={Rica} classTitle="title-1" subTitle="instagram" />}
      <BackgroundDiv titleClass={"logo-section small-section"} img={"/assets/images/cab/logo-bg.jpg"} divImg="/assets/images/cab/logo-bg.jpg" imgWidth={1905} imgHeight={215} displayClass="none">
        <div className="container">
          <div className="row">
            <div className="col">
              <Slider {...slide5} className="slide-5 no-arrow ">
                {cabLooData.map((data: ICabLogoProps,index) => (
                  <div key={index}>
                    <a href="#" className="logo-box">
                      <Img src={data.img} alt="" className="img-fluid " />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </BackgroundDiv>
    </section>
  );
};

export default LogoCab;
