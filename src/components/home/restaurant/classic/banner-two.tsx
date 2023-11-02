import Rating from "@/components/common/rating";
import { FC } from "react";

const BannerTwo: FC = () => {
  return (
    <section className="discount-banner">
      <div className="container">
        <div className="row">
          <div className="offset-lg-4 col-lg-5">
            <div className="banner-content">
              <h4>Enjoy with Family and Friends</h4>
              <h2>25% discount</h2>
              <div className="coupon">
                <h5>for family parties! coupon 015</h5>
              </div>
              <p>make a reservation</p>
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
