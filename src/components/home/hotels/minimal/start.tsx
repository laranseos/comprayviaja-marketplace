import { FC } from "react";
import AboutCommon from "@/components/common/choose-rica/about";
import { Lorem } from "@/constant/constant";
import { startData } from "@/data/home/hotel/hotel-data";

const StartComponent: FC = () => {
  return (
    <section className="about-section pt-0 section-b-space bg-white">
      <div className="container">
        <div className="title-1 detail-title">
          <h2>why choose rica?</h2>
          <p>{Lorem}</p>
        </div>
        <div className="highlight-section">
          <div className="row">
            <AboutCommon aboutData={startData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartComponent;
