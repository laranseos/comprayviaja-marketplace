import { mapId } from "@/data/common-data";
import { FC } from "react";

const Location: FC = () => {
  return (
    <div className="menu-part tab-pane fade map" id="location">
      <iframe src={mapId} style={{ border: "0" }} allowFullScreen={false}></iframe>
    </div>
  );
};

export default Location;
