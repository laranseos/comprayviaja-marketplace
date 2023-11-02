import { FC } from "react";
import { skeletonData } from "./data";
import { RootState } from "@/redux-toolkit/store";
import { useSelector } from "react-redux";
import SkeletonList from "./list-view";

const SkeletonMap: FC<ILoaderProps> = ({ side }) => {
  const { gridStyle } = useSelector((state: RootState) => state.gridReducer);
  const renderSpecialBoxes = () => {
    return skeletonData.map((data, index) => (
      <div key={index} className="col-sm-6 grid-item">
        <div className="special-box">
          <div className="special-img"></div>
          <div className="special-content">
            <h5>{data.title}</h5>
            <p>
              <span></span>
              <span></span>
            </p>
            <div className="bottom-section">
              <div className="rating"></div>
              <div className="price">
                <span>{data.price}</span>
                <div className="facility-detail"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className={`map-section col-lg-6 ${side === "right" ? "order-1" : ""}`}>
        <div className="map"></div>
      </div>
      <div className="col-lg-6 ratio3_2">
        <div className="product-wrapper-grid special-section grid-box">{gridStyle === "list-view" ? <SkeletonList /> : <div className={"row  content grid"}>{renderSpecialBoxes()}</div>}</div>
      </div>
    </>
  );
};

export default SkeletonMap;
