import { FC } from "react";
import TitleThree from "@/components/common/title/title-three";
import BackgroundDiv from "@/utils/HOC/background-div";
import FlightBox from "./flight-box";
import { topDestinationData } from "@/data/home/flight/flight-data";

const TopDestination: FC = () => {
  return (
    <section className="pt-0 flight-detail  zig-zag-effect">
      <BackgroundDiv titleClass="cloud section-b-space section-t-space" displayClass="none" img={"/assets/images/flights/cloud.png"} divImg="/assets/images/flights/cloud.png" imgWidth={0} imgHeight={0}>
        <div className="container">
          <TitleThree classTitle={"title-2"} subTitle="top destination..." span="around the world" desc="Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard......." />
          <div className="row">
            <div className="col-12">
              <FlightBox flightData={topDestinationData} />
            </div>
          </div>
        </div>
      </BackgroundDiv>
    </section>
  );
};

export default TopDestination;
