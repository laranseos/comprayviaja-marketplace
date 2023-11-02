import { LocationCons } from "@/constant/constant";
import { mapId } from "@/data/common-data";
import { FC } from "react";

const Location: FC<IRoomProps> = ({ tab }) => {
  return (
    <div className="desc-box" id="location">
      <h4 className="content-title mx-1">location</h4>
      {tab && <h4 className="content-title">{LocationCons}</h4>}
      <div className="menu-part page-section map">
        <iframe src={mapId} style={{ border: "0" }} ></iframe>
      </div>
    </div>
  );
};

export default Location;
