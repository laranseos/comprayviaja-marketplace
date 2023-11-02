"use client";
import Slider from "react-slick";
import { fullSlider } from "@/components/common/slider-options";
import Highlight from "./pages/highlight";
import ItineraryCom from "./pages/itinerary";
import ReviewCom from "./pages/review";
import PoliciesCom from "./pages/policies";
import AccommodationsCom from "./pages/accommodations";
import { FC } from "react";

const FullSlider: FC = () => {
  return (
    <section className="full-page pt-0 position-relative">
      <Slider {...fullSlider} className="full-slider mb-0">
        <Highlight />
        <ItineraryCom />
        <ReviewCom />
        <PoliciesCom />
        <AccommodationsCom />
      </Slider>
      <div className="overlay"></div>
    </section>
  );
};

export default FullSlider;
