import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import Button from "../../btn";
import Link from "next/link";

const CabListProducts: FC<IFlightProductBoxProps> = ({ data, cardToShow, grid }) => {
  return (
    <div className="flight-detail-sec cab-detail-sec">
      <div className="detail-bar">
        {data?.slice(cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((item,index) => (
          <div className="detail-wrap wow fadeInUp" key={index}>
            <div className="row">
              <div className="col-md-3">
                <div className="logo-sec">
                  <Img src={item.img} className="img-fluid" alt="" />
                  <span className="title">{item.name}</span>
                  <label>({item.cabType})</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="car-details">
                  <ul>
                    <li>
                      <Img src="/assets/images/cab/icon/seat.png" className="img-fluid" alt="" /> {item.capacity} seater
                    </li>
                    <li>
                      <Img src="/assets/images/cab/icon/luggage.png" className="img-fluid" alt="" /> {item.luggage}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Img src="/assets/images/cab/icon/snowflake.png" className="img-fluid" alt="" /> AC
                    </li>
                    <li>
                      <Img src="/assets/images/cab/icon/settings.png" className="img-fluid" alt="" /> {item.option}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="price">
                  <div>
                    <h4>${item.price}</h4>
                    <h6>
                      fare/km : <span>${item.rate}</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="book-flight">
                  <Link href="/cab/booking"><Button btnClass="btn btn-solid color1" name="book now" /></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CabListProducts;
