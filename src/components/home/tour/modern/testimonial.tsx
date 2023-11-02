"use client";
import { FC } from "react";
import SliderFour from "@/components/common/slider-components/slider4";
import TitleThree from "@/components/common/title/title-three";
import { Latest } from "@/constant/constant";
import { testimonialData } from "@/data/home/tour/tour-data";

const Testimonial: FC = () => {
  return (
    <section className="testimonial_section section-b-space">
      <div className="container">
        <TitleThree title={Latest} subTitle="our guests love us" desc="our tourist is satisfied and give best feedback" classTitle="title-1 title-5" />
        <div className="row">
          <div className="offset-lg-1 col-lg-10">
            <SliderFour sliderData={testimonialData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
