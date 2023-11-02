import { ContinueBooking } from "@/constant/constant";
import FlightDetail from "./flight-detail";
import TravelDetail from "./travel-detail";
import TravelInsurance from "./travel-insurance";
import { FC } from "react";
import InformationPage from "@/components/common/booking-page/information";
import Summary from "@/components/common/booking-page/summary";
import Coupon from "@/components/common/booking-page/coupon";

const BookingNowComponent: FC = () => {
  return (
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="review-section">
              <FlightDetail />
              <InformationPage type="flight" />
              <TravelDetail />
              <TravelInsurance />
            </div>
          </div>
          <div className="col-lg-4 res-margin">
            <div className="sticky-cls-top">
              <div className="review-section">
                <Summary />
                <Coupon />
              </div>
            </div>
          </div>
        </div>
        <div className="continue-btn">
          <button className="btn btn-solid" type="submit">
            {ContinueBooking}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingNowComponent;
