"use client";
import { FC, useState } from "react";
import Button from "@/components/common/btn";
import { BookNow } from "@/constant/constant";
import { RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";
import { useSelector } from "react-redux";
import Link from "next/link";

const DetailBar: FC<IFlightProductBoxProps> = ({ data, cardToShow, grid }) => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);

  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleDetailWrapClick = (item: IFlightProps) => {
    if (activeItem === item.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item.id ?? null);
    }
  };
  return (
    <div className="detail-bar">
      {data?.slice(cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((item: IFlightProps,index) => (
        <div
          className={`detail-wrap wow fadeInUp ${activeItem === item.id ? "active" : ""}`}
          key={index}
          onClick={() => handleDetailWrapClick(item)}
        >
          <div className="row">
            <div className="col-md-2">
              <div className="logo-sec">
                <Img src={item.img} className="img-fluid" alt="" />
                <span className="title">{item.airline}</span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="airport-part">
                <div className="airport-name">
                  <h4>{item.departureTime}</h4>
                  <h6>DXB</h6>
                </div>
                <div className="airport-progress">
                  <i className="fas fa-plane-departure float-start"></i>
                  <i className="fas fa-plane-arrival float-end"></i>
                  <div className="stop">{item.stop}</div>
                </div>
                <div className="airport-name arrival">
                  <h4>{item.arriveTime}</h4>
                  <h6>CDG</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="price">
                <div>
                  <h4>
                    {symbol}
                    {item?.price !== undefined ? (currencyValue * item.price).toFixed(2) : "N/A"}
                  </h4>
                  <span>{item.priceTag}</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="book-flight">
                <Link href="/flight/booking/booking-now"><Button btnClass="btn btn-solid color1" name={BookNow} /></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailBar;
