"use client";
import { FC } from "react";
import BackgroundDiv from "@/utils/HOC/background-div";
import TourSearch from "@/components/common/search/tour-search";

const HomeBanner: FC = () => {
  return (
    <section className="home_section tour_layout slide-1 p-0">
      <div>
        <BackgroundDiv img="/assets/images/tour/background/14.jpg" titleClass="home home-long" imgHeight={621} imgWidth={1905} displayClass="none" divImg="/assets/images/tour/background/14.jpg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-content mix-layout justify-content-center">
                  <div className="w-80 bg-transparent">
                    <TourSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundDiv>
      </div>
    </section>
  );
};

export default HomeBanner;
