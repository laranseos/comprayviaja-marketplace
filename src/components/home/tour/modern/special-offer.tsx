import AppBtn from "@/components/common/button/app-button";
import { DownloadOurApp } from "@/constant/constant";
import BackgroundSection from "@/utils/HOC/background-section";
import { FC } from "react";

const SpecialOffer: FC = () => {
  return (
    <BackgroundSection img="/assets/images/tour/app-bg.jpg" imgHeight={600} imgWidth={1920} titleClass="app-section medium-section" position="center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="app-box rounded25">
              <div>
                <h5>
                  special <span>nature</span> tour offer
                </h5>
                <h2>{DownloadOurApp}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the of industry standard dum my text ever since the 1500s,</p>
                <AppBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default SpecialOffer;
