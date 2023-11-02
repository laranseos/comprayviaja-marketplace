import { ContactDetails } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import GuestDetailPage from "./guest-detail";
import InformationPage from "@/components/common/booking-page/information";
import Summary from "@/components/flight/booking/booking-now/summary";
import Coupon from "@/components/common/booking-page/coupon";

const MainBooking: FC = () => {
  return (
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="review-section">
              <div className="review_box">
                <div className="title-top">
                  <h5>{ContactDetails}</h5>
                </div>
                <GuestDetailPage />
              </div>
              <InformationPage type="cab" />
            </div>
          </div>
          <div className="col-lg-4 booking-order res-margin">
            <div className="review-section">
              <Summary />
              <Coupon />
              <div className="review_box">
                <Img src="/assets/images/cab/advertise.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBooking;
