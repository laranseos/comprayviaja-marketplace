import { Apply } from "@/constant/constant";
import { FC } from "react";

const Coupon: FC = () => {
  return (
    <div className="review_box">
      <div className="flight_detail">
        <div className="promo-section">
          <div className="form-group mb-0">
            <label>have a coupon code?</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo Code"
              />
              <div className="input-group-prepend">
                <span className="input-group-text">{Apply}</span>
              </div>
            </div>
          </div>
          <div className="promos">
            <form>
              <div className="form-check">
                <input className="form-check-input radio_animated" type="radio" name="radiocls2" id="radio1" defaultValue="option1" defaultChecked/>
                <div>
                  <label className="form-check-label title" htmlFor="radio1">
                    RICA500
                  </label>
                  <label className="form-check-label" htmlFor="radio1">
                    Use RICA50, and get $50 off on first booking
                  </label>
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input radio_animated" type="radio" name="radiocls2" id="radio2" defaultValue="option2"/>
                <div>
                  <label className="form-check-label title" htmlFor="radio2">
                    CAB10
                  </label>
                  <label className="form-check-label" htmlFor="radio2">
                    Use FLY10, and get 10% off upto $50 on cab ticket bookings.
                  </label>
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input radio_animated" type="radio" name="radiocls2" id="radio3" defaultValue="option2"/>
                <div>
                  <label className="form-check-label title" htmlFor="radio3">
                    CAB80
                  </label>
                  <label className="form-check-label" htmlFor="radio3">
                    Upto 80% Off + Upto 40% Cashback on Cab booking &amp; more +
                    Extra 10% off via ICICI Cards
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
