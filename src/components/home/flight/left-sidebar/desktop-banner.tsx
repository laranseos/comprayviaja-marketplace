import { MakeBooking } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const DesktopBanner: FC = () => {
  return (
    <div className="top-banner d-none d-xl-block">
      <Img src="/assets/images/flights/banner.jpg" className="img-fluid" alt="" />

      <div className="container">
        <div className="top-banner-content">
          {MakeBooking}
          <div className="flip">
            <div>
              <div>Faster</div>
            </div>
            <div>
              <div>easy</div>
            </div>
            <div>
              <div>affordable</div>
            </div>
          </div>
          Book ticket now !
        </div>
      </div>
    </div>
  );
};

export default DesktopBanner;
