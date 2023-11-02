import { FC } from "react";
import BackgroundSection from "@/utils/HOC/background-section";
import AppPage from "@/components/common/App/app-page";
import { appImageModernData } from "@/data/home/cab/cab-data";

const AppCab: FC = () => {
  return (
    <BackgroundSection titleClass="app-section section-b-space" img="/assets/images/cab/app-bg.jpg" imgWidth={960} imgHeight={640} position="top">
      <div className="container">
        <AppPage badge={true} imgData={appImageModernData} />
      </div>
    </BackgroundSection>
  );
};

export default AppCab;
