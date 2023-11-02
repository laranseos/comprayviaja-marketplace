"use client";
import { slide6 } from "@/components/common/slider-options";
import TitleTwo from "@/components/common/title/title-two";
import { MostPopularDestination } from "@/constant/constant";
import SliderOne from "@/components/common/slider-components/slider1";
import { destinationData } from "@/data/home/hotel/hotel-data";

const Destination: React.FC = () => {
  return (
    <section className="section-b-space">
      <div className="tourSection ratio_asos">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TitleTwo title={MostPopularDestination} titleClass="title-1" />
              <SliderOne slideClass="slide-6 no-arrow" tourData={destinationData} classTitle="tourBox wow zoomIn" slideCom={slide6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
