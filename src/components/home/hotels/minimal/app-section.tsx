import { FC } from "react";
import AppPage from "@/components/common/App/app-page";
import { appImageModernData } from "@/data/home/cab/cab-data";
import BackgroundSection from "@/utils/HOC/background-section";

const AppSection: FC = () => {
  return (
    <BackgroundSection titleClass="app-section section-b-space app-dark position-cls b-top" img="/assets/images/hotel/background/10.jpg" imgWidth={960} imgHeight={640} position="top">
      <div className="container">
        <AppPage imgData={appImageModernData} />
      </div>
    </BackgroundSection>
  );
};

export default AppSection;
