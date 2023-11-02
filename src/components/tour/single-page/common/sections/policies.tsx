import { policyData } from "@/data/tour/single-page";
import { FC } from "react";

const Policies: FC<IReviewSliderProps> = ({ fullSlide }) => {
  return (
    <div className="about menu-part tab-pane" id="policies">
      {fullSlide && <h2 className="mb-3">policy</h2>}
      {policyData.map((data,index) =>
        <div className="about-sec" key={index}>
          <h6>{data.title}</h6>
          <ul>
            {data.list.map((item, i) =>
              <li key={i}>{item.desc}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Policies;
