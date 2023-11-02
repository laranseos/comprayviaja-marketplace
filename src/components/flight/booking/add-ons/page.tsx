import TravelAddons from "./travel-addons";
import { AddMoreTrip, TravelAddonsConst } from "@/constant/constant";
import Button from "@/components/common/btn";
import NewsLatterContent from "@/components/common/news-latter/page";
import FlightDetailsContent from "./flight-detail";
import { FC } from "react";

const Addons:FC = () => {
  return (
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="review-section">
              <div className="review_box">
                <div className="title-top">
                  <h5>{AddMoreTrip}</h5>
                </div>
                <FlightDetailsContent />
              </div>
            </div>
          </div>
          <div className="col-lg-4 res-margin">
            <div className="sticky-cls-top">
              <div className="review-section">
                <div className="review_box">
                  <div className="title-top">
                    <h5>{TravelAddonsConst}</h5>
                  </div>
                  <TravelAddons />
                </div>
              </div>
              <NewsLatterContent titleClass="single-section" />
            </div>
          </div>
        </div>
        <div className="continue-btn">
          <Button btnClass="btn btn-solid" name="make payment" />
        </div>
      </div>
    </section>
  );
};

export default Addons;
