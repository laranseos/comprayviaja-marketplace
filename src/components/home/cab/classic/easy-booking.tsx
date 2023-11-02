import Steps from "@/components/common/steps";
import TitleThree from "@/components/common/title/title-three";
import { Lorem, SuperEasyBooking } from "@/constant/constant";
import { bookingData } from "@/data/home/cab/cab-data";
import BackgroundSection from "@/utils/HOC/background-section";

const EasyBooking: React.FC = () => {
  return (
    <BackgroundSection titleClass={"section-b-space process-steps"} img={"/assets/images/cab/app-bg.jpg"} imgWidth={1920} imgHeight={1196} position={"center"}>
      <div className="container">
        <TitleThree subTitle={SuperEasyBooking} classTitle="title-1 detail-title" desc={Lorem} h2Class="text-white pt-0" pClass="text-white" />
        <Steps stepsData={bookingData} />
      </div>
    </BackgroundSection>
  );
};

export default EasyBooking;
