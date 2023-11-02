import ReviewSection from "@/components/common/booking-page/payment/review";
import TravelAddons from "../add-ons/travel-addons";
import { BookingSummary, PaymentOption } from "@/constant/constant";
import { FC } from "react";

const PaymentComponent: FC = () => {
  return (
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="review-section">
              <div className="review_box">
                <div className="title-top">
                  <h5>{PaymentOption}</h5>
                </div>
                <ReviewSection />
              </div>
            </div>
          </div>
          <div className="col-lg-4 res-margin">
            <div className="sticky-cls-top">
              <div className="review-section">
                <div className="review_box">
                  <div className="title-top">
                    <h5>{BookingSummary}</h5>
                  </div>
                  <TravelAddons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentComponent;
