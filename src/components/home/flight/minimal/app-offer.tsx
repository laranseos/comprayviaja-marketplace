import { FC } from "react";
import AppPage from "@/components/common/App/app-page";
import { appImageModernData } from "@/data/home/cab/cab-data";

const AppOffer: FC = () => {
  return (
    <section className="app-section section-b-space app-dark position-cls">
      <video width="100%" height="100%" controls={false} autoPlay className="video-mixed">
        <source src="/assets/video/plane.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <AppPage imgData={appImageModernData} />
      </div>
    </section>
  );
};

export default AppOffer;
