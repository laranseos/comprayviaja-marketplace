import Button from "@/components/common/btn";
import Rating from "@/components/common/rating";
import { SeaViewHotel } from "@/constant/constant";
import { FC } from "react";
import Link from "next/link";

const HotelBannerDetail: FC = () => {
  return (
    <div className="hotel-name">
      <div className="left-part">
        <div className="top">
          <h2>{SeaViewHotel}</h2>
          <Rating />
          <div className="share-buttons">
            <a href="#" className="btn btn-solid">
              <i className="far fa-share-square"></i> share
            </a>
            <a href="#" className="btn btn-solid">
              <i className="far fa-heart"></i> save
            </a>
          </div>
        </div>
        <p>Mina Road, Bur Dubai, Dubai, United Arab Emirates</p>
        <div className="facility-detail">
          <span>free wifi</span>
          <span>free breakfast</span>
        </div>
      </div>
      <div className="right-part">
        <h2 className="price">
          $250 <span>/ per night</span>
        </h2>
        <Link href="/hotel/booking/booking-page"><Button btnClass="btn btn-rounded btn-sm color1" name="book this now" /></Link>
      </div>
    </div>
  );
};

export default HotelBannerDetail;
