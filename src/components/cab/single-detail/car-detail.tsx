import { CarOverview, Lorem, PeugeotCitroen } from "@/constant/constant";
import { carFeatures, carOverview } from "@/data/car/single-page";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const CarDetailPage: FC = () => {
  const includeInPrice = ["cancellation", "theft protection", "local taxes", "Prices are inclusive of all the taxes", "fuel charges", "driver allowance"];

  const excludeInPrice = ["late return charges", "Night Allowance", "Parking", "toll / state tax"];

  return (
    <div className="cab-single-detail">
      <div className="title-car">
        <h5>{PeugeotCitroen}</h5>
        <h6>
          fare/km : <span>$24</span>
        </h6>
      </div>
      <p className="description">{Lorem}</p>
      <div className="overview">
        <h6>{CarOverview}</h6>
        <ul>
          {carOverview.map((item, index) => (
            <li key={index}>
              <Img src={item.src} className="img-fluid" alt="" /> {item.text}
            </li>
          ))}
        </ul>
        <ul>
          {carFeatures.map((item, index) => (
            <li key={index}>
              <Img src={item.src} className="img-fluid" alt="" /> {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="details row">
        <div className="col-sm-6">
          <h6>include in this price:</h6>
          <ul>
            {includeInPrice.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-sm-6">
          <h6>exclude in this price:</h6>
          <ul>
            {excludeInPrice.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
