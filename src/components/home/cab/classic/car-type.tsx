import SliderCenter from "@/components/common/slider-components/slider-center";
import TitleThree from "@/components/common/title/title-three";
import { Lorem } from "@/constant/constant";
import { cabTypeData } from "@/data/home/cab/cab-data";
import { FC } from "react";

const CarType: FC = () => {
  return (
    <section className="section-b-space">
      <TitleThree title="widest varity" classTitle="title-1 detail-title" subTitle="our awesome fleet" desc={Lorem} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="center-slider-cab arrow-classic car-type-section">
              <SliderCenter centerData={cabTypeData} divClass="type-box" icons={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarType;
