import { FC } from "react";
import Img from "@/utils/BackgroundImageRatio";
import ImageSlider from "../image-slider";
import { RootState } from "@/redux-toolkit/store";
import { useSelector } from "react-redux";
import { RestaurantProductsProps } from "../element";
import Link from 'next/link';

const RestaurantProducts: FC<RestaurantProductsProps> = ({ data, view }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);

  return (
    <div className="special-box p-0">
      <div className="special-img">
        {view === "slider" ? (
          <ImageSlider images={data?.sliderImg} />
        ) : (
          <Link href="/hotel/single-page/image-box">
            <Img src={data?.img} className="img-fluid blur-up lazyload bg-img" alt="" />
          </Link>
        )}
      </div>
      <div className="special-content restaurant-detail">
        <Link href="/restaurant/listing/grid-view/grid-2">
          <h5>
            {data?.item}
            <span className={`${data?.popular !== "non veg" ? "positive" : "negative"}`}>
              {data?.rate} <i className="fas fa-star"></i>
            </span>
          </h5>
        </Link>
        <ul>
          <li>{data?.place}</li>
          <li>{data?.time}(Mon-Sun)</li>
          <li>
            cost {symbol}
            {(currencyValue * (data?.price || 0)).toFixed(0)} for Two
          </li>
        </ul>
      </div>
      {data?.label && <div className="label-offer">{data?.label}</div>}
    </div>
  );
};

export default RestaurantProducts;
