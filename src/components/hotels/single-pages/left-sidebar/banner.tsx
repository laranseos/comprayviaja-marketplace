import BackgroundSection from "@/utils/HOC/background-section";
import HotelBannerDetail from "../hotel-detail-banner/page";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <BackgroundSection titleClass={"hotel-single-section parallax-img pt-0"} img={"/assets/video/sea.mp4"} imgWidth={100} imgHeight={450} position={"bottom"} video={true}>
      <div className="hotel-title-section">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <HotelBannerDetail />
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default Banner;
