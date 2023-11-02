import { FC } from "react";
import { GreatJourneyBegins, Rica } from "@/constant/constant";
import BackgroundSection from "@/utils/HOC/background-section";
import MinimalFlightForm from "./flight-form";
import Img from "@/utils/BackgroundImageRatio";

const HomeBanner: FC = () => {
  return (
    <BackgroundSection titleClass="cab-section flight-section home-section p-0" img={"/assets/images/flights/sky.jpg"} imgWidth={1920} imgHeight={427} position="center">
      <div className="cloud">
        <Img src="/assets/images/flights/cloud-real.png" alt="" className="bg-img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="flight-left h-100">
              <Img src="/assets/images/flights/plane-1.png" className="img-fluid plane-animation" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cab-content">
              <div>
                <div className="top-cls">#{Rica}</div>
                <h2>{GreatJourneyBegins}</h2>
                <h3>with a small step</h3>
                <MinimalFlightForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default HomeBanner;
