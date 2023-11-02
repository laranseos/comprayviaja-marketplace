import BirdAnimation from "@/components/common/animation/bird-animation";
import Steps from "@/components/common/steps";
import TitleThree from "@/components/common/title/title-three";
import { Lorem, SuperEasyBooking } from "@/constant/constant";
import { bookingData } from "@/data/home/hotel/hotel-data";
import BackgroundSection from "@/utils/HOC/background-section";

const Start: React.FC = () => {
  return (
    <BackgroundSection titleClass={"small-section process-steps icon-large"} img={"/assets/images/tour/background/15.jpg"} imgWidth={1920} imgHeight={1196} position={"center"}>
      <div className="container">
        <TitleThree subTitle={SuperEasyBooking} classTitle="title-1 detail-title" desc={Lorem} pClass="text-dark" h2Class="pt-0" />
        <Steps stepsData={bookingData} />
      </div>
      <BirdAnimation />
    </BackgroundSection>
  );
};

export default Start;
