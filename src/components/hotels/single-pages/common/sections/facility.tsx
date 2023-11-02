import { FacilityAtSeaView } from "@/constant/constant";
import { facilityData } from "@/data/hotels/single-page";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const Facilities: FC<IRoomProps> = ({ tab }) => {
  return (
    <div className="desc-box" id="facility">
      <h4 className="content-title">facility at sea view</h4>
      {tab && <h4 className="content-title">{FacilityAtSeaView}</h4>}
      <div className="menu-part page-section facility">
        <div className="row">
          {facilityData.map((data: IFacilityDataProps,index) => (
            <div className="col-xl-3 col-6" key={index}>
              <h6>
                <Img src={data.img} className="img-fluid " alt="" /> {data.title}
              </h6>
              <ul>
                {data.children.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check"></i> {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
