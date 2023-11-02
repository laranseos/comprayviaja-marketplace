import { FC } from "react";
import DetailBar from "../flight-product-box/detail-bar";
import SectionBar from "../flight-product-box/section-bar";
import TitleBar from "../flight-product-box/title-bar";

const RoundTrip: FC<IFlightProductBoxProps> = ({ data, cardToShow, grid }) => {
  return (
    <div className="flight-detail-sec round_trip">
      <div className="row">
        <div className="col-lg-6">
          <SectionBar ari="paris" dep="dubai" date="tue, 19-Aug-2019" />
          <TitleBar />
          <DetailBar data={data} cardToShow={cardToShow} grid={grid} />
        </div>
        <div className="col-lg-6">
          <SectionBar ari="dubai" dep="paris" date="wen, 20-Aug-2019" />
          <TitleBar />
          <DetailBar data={data} cardToShow={cardToShow} grid={grid} />
        </div>
      </div>
    </div>
  );
};

export default RoundTrip;
