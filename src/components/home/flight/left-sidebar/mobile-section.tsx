import { MakeBooking } from "@/constant/constant";
import { FC } from "react";

const MobileBanner: FC = () => {
  return (
    <div className="top-banner d-block d-xl-none">
      <img src="/assets/images/flights/banner.jpg" className="img-fluid" alt="" />
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

export default MobileBanner;
