import Coupon from "@/components/common/booking-page/coupon";
import ReviewSection from "@/components/common/booking-page/payment/review";
import Summary from "@/components/common/booking-page/summary";
import { PaymentOption } from "@/constant/constant";
import { FC } from "react";

const PaymentPage: FC = () => {
  return (
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="product_img_scroll" data-sticky_column>
              <div className="review-section">
                <div className="review_box">
                  <div className="title-top">
                    <h5>{PaymentOption}</h5>
                  </div>
                  <ReviewSection />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 booking-order res-margin">
            <div className="review-section">
              <Summary />
              <Coupon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
