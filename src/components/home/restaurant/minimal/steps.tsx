import { FC } from "react";
import Steps from "@/components/common/steps";
import TitleThree from "@/components/common/title/title-three";
import { Lorem, SuperEasyBooking } from "@/constant/constant";
import { imageData, stepsData } from "@/data/home/restaurant/resatuarant-data";
import Img from "@/utils/BackgroundImageRatio";
import ParallaxEffect from "./animation";

const StepsRestaurant: FC = () => {
  return (
    <section className="section-b-space process-steps parallax-img">
      <Img src="/assets/images/restaurant/bg-4.jpg" className="img-fluid bg-img" alt="" />
      <div className="parallax-effect">
        <ParallaxEffect />
        {/* {imageData.map((data) => (
          <div className={`food-img ${data.class}`} key={data.id}>
            <Img src={data.img} className="img-fluid" />
          </div>
        ))} */}
      </div>
      <div className="container">
        <TitleThree classTitle={"title-1 detail-title"} subTitle={SuperEasyBooking} pClass="font-design" h2Class="pt-0" desc={Lorem} />
        <Steps stepsData={stepsData} titleClass="invert-lines" />
      </div>
    </section>
  );
};

export default StepsRestaurant;
