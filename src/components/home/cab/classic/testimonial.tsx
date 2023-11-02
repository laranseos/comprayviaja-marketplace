"use client";
import { FC } from "react";
import SliderFour from "@/components/common/slider-components/slider4";
import TitleComponent from "@/components/common/title/title";
import { OurHappyCustomer } from "@/constant/constant";
import { testimonialData } from "@/data/home/tour/tour-data";

const Testimonial: FC = () => {
  return (
    <section className="testimonial_section section-b-space">
      <div className="container">
        <TitleComponent title="why choose rica?" subTitle={OurHappyCustomer} titleClass="title-1 detail-title" />
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
