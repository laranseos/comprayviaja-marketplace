"use client";
import { FC } from "react";
import SliderSix from "@/components/common/slider-components/slide6";
import TitleThree from "@/components/common/title/title-three";
import { BestDeal, Rica } from "@/constant/constant";
import { holidayFlightData } from "@/data/home/flight/flight-data";

const HolidayPackage: FC = () => {
  return (
    <section className="menu-section section-b-space default-layout-slider">
      <div className="container">
        <TitleThree classTitle={"title-1 title-5"} title={Rica} subTitle={BestDeal} desc="View all live offers for your flight bookings" />
        <div className="row">
          <div className="col">
            <SliderSix slideData={holidayFlightData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolidayPackage;
