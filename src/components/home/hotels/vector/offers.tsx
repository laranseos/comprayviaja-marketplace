"use client";
import { slide5 } from "@/components/common/slider-options";
import TitleTwo from "@/components/common/title/title-two";
import { TopOffers } from "@/constant/constant";
import SliderOne from "@/components/common/slider-components/slider1";
import { offerData } from "@/data/home/hotel/hotel-data";

const OfferComponent: React.FC = () => {
  return (
    <section className="">
      <div className="tourSection ratio3_2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TitleTwo title={TopOffers} titleClass="title-1" />
              <SliderOne tourData={offerData} classTitle="tourBox wow zoomIn" slideClass="flight-5 no-arrow" slideCom={slide5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferComponent;
