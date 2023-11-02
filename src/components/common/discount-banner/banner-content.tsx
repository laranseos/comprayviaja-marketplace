import { FC } from "react";
import { BuyNow, Discount, Lorem, Offer } from "@/constant/constant";
import { RootState } from "@/redux-toolkit/store";
import { useSelector } from "react-redux";
import TextSplit from "../text-split";
import Link from "next/link";

interface IBannerContentProps {
  type?: string;
}
const BannerContent: FC<IBannerContentProps> = ({ type }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <div className="banner-content">
      <div>
        {type === "tour" ? (
          <>
            <div className="offer-text">
              <span className="offer">{Offer}</span>
              <h6>
                <TextSplit text="limited time" />
              </h6>
            </div>
            <h5>
              special <span>nature</span> tour offer
            </h5>
          </>
        ) : (
          <h5>special nature tour offer</h5>
        )}

        <h2>
          {Discount} <span>20-30%</span>
        </h2>
        <p>{Lorem}</p>
        <h2 className="price">
          {type === "tour" && (
            <del>
              {symbol}
              {(currencyValue * 600).toFixed(0)}
            </del>
          )} {symbol}{(currencyValue * 420).toFixed(0)}
        </h2>
        <div className="bottom-section">
          <Link href="/tour/booking/booking-page" className="btn btn-rounded btn-sm color1">
            {BuyNow}
          </Link>
          <div className="info-btn"><h6>7 days &nbsp; | &nbsp; 8 nights</h6></div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
