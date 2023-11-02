"use client";
import { FC } from "react";
import { slide3 } from "@/components/common/slider-options";
import TitleThree from "@/components/common/title/title-three";
import { MostPopularTours, NewOffer } from "@/constant/constant";
import { newOffersData } from "@/data/home/tour/tour-data";
import Slide8 from "@/components/common/slider-components/slide8";
import Slider from "react-slick";

const NewOffers: FC = () => {
  return (
    <section className="category-sec ratio3_2 section-b-space">
      <div className="container">
        <TitleThree title={NewOffer} subTitle={MostPopularTours} desc="Trips, experiences, and places. All in one service." classTitle="title-1 title-5" />
        <div className="row">
          <div className="col">
            <Slider {...slide3} className="slide-3 arrow-classic">
              {newOffersData.map((data: INewOfferProps ,index) => (
                <Slide8 data={data} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewOffers;
