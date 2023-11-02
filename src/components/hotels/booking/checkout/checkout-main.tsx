import RestaurantAnimation from "@/components/common/animation/restaurant-animation";
import { PaymentOption } from "@/constant/constant";
import { FC } from "react";
import ReviewSection from "@/components/common/booking-page/payment/review";
import Summary from "@/components/common/booking-page/booking-summary";

const Checkout: FC = () => {
  return (
    <section className="section-b-space bg-inner animated-section">
      <RestaurantAnimation />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="summery-box">
              <h2>{PaymentOption}</h2>
              <div className="review-section default-accordion">
                <div className="review_box shadow-none">
                  <ReviewSection />
                </div>
              </div>
            </div>
          </div>
          <Summary />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
