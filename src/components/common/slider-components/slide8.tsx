import { FC } from "react";
import Img from "@/utils/BackgroundImageRatio";
import Rating from "@/components/common/rating";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Link from 'next/link';

const Slide8: FC<ISlider8Props> = ({ data }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <Link href="/home/tour/trending" key={data.id}>
      <div className="category-box">
        <div className="img-category">
          <div className="side-effect"></div>
          <div>
            <Img src={data.img} alt="" className="img-fluid  bg-img" />
          </div>
          <div className="top-bar">
            <span className="offer">{data.badge}</span>
            <h5>
              <del>
                {symbol}
                {(currencyValue * data.price).toFixed(0)}
              </del>{" "}
              {symbol}
              {(currencyValue * data.discount).toFixed(0)}
            </h5>
          </div>
          <div className="like-cls">
            <i className="fas fa-heart">
              <span className="effect"></span>
            </i>
          </div>
        </div>
        <div className="content-category">
          <div className="top">
            <h3>{data.title}</h3>
            <Rating />
          </div>
          <p>{data.desc}</p>
          <h6>
            {data.offers} <span> {data.person}</span>
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default Slide8;
