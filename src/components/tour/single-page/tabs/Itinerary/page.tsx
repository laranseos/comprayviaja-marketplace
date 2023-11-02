import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const HeadingEight: FC = () => {
  return (
    <div className="card-body">
      It’s time now to say goodbye to our travel companions. Let us be in contact with each other through email, Facebook, and meet again on one more memorable tour. See you all!!
      <div className="highlight">
        <ul>
          <li>
            <Img src="/assets/images/icon/tour/fork.png" className="img-fluid" alt="" /> breakfast
          </li>
          <li>
            <Img src="/assets/images/icon/tour/fork.png" className="img-fluid" alt="" /> lunch
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadingEight;
