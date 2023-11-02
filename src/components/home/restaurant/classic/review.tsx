"use client";
import { Customer, Our, OurHappyCustomer } from "@/constant/constant";
import TitleComponent from "@/components/common/title/title";
import ReviewContent from "@/components/common/review/page";
import RestaurantAnimation from "@/components/common/animation/restaurant-animation";
import { FC } from "react";

const Reviews:FC = () => {
  return (
    <section className="testimonial-section  animated-section">
      <RestaurantAnimation />
      <div className="container">
        <TitleComponent title={Our} subTitle={OurHappyCustomer} span={Customer} titleClass={"title-3"} />

        <div className="slide-1">
          <ReviewContent />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
