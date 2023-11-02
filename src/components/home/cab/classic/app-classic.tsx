import { FC } from "react";
import AppPage from "@/components/common/App/app-page";
import { appImageClassicData } from "@/data/home/cab/cab-data";
import BackgroundSection from "@/utils/HOC/background-section";

const AppClassic: FC = () => {
  return (
    <BackgroundSection titleClass={"app-section section-b-space"} img={"/assets/images/cab/app-bg.jpg"} imgWidth={847} imgHeight={1905} position={"center"}>
      <div className="container">
        <AppPage badge={true} imgData={appImageClassicData} whiteClass={true} />
      </div>
    </BackgroundSection>
  );
};

export default AppClassic;
