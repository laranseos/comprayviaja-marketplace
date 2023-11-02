import { FC } from "react";
import BackgroundSection from "@/utils/HOC/background-section";
import { LatestVideo, New } from "@/constant/constant";
import { videoCabData } from "@/data/home/cab/cab-data";
import CabAnimation from "@/components/common/animation/cab-animation";
import TitleComponent from "@/components/common/title/title";
import SliderThree from "@/components/common/slider-components/slider3";

const VehicleVideo: FC = () => {
  return (
    <>
      <BackgroundSection titleClass={"section-b-space ticket-section animated-section"} img={"/assets/images/cab/app-bg.jpg"} imgWidth={1920} imgHeight={621} position={"center"}>
        <CabAnimation />
        <div className="container">
          <TitleComponent title={New} subTitle={LatestVideo} h2Class="text-white" titleClass="title-1" />
          <SliderThree slideData={videoCabData}  playButton />
        </div>
      </BackgroundSection>
    </>
  );
};

export default VehicleVideo;
