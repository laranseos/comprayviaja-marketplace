import { cartItemsData } from "@/data/restaurant/single-page";
import CartItem from "../../single-page/common/cart-item/page";
import ReviewSection from "@/components/common/booking-page/payment/review";
import CheckoutProcess from "./checkout-process";
import { FC } from "react";
import NewsLatterContent from "@/components/common/news-latter/page";

const CheckoutPage: FC = () => {
  return (
    <section className="single-section small-section bg-inner">
      <div className="container" data-sticky_parent>
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="checkout-process">
              <CheckoutProcess />
              <div className="checkout-box">
                <h4 className="title">payment:</h4>
                <div className="review-section">
                  <div className="review_box">
                    <ReviewSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 checkout-cart">
            <div className="sticky-cls-top">
              <CartItem items={cartItemsData} />
              <NewsLatterContent titleClass={"single-sidebar p-0"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
