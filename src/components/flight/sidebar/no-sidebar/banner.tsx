import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const Banner: FC = () => {
  return (
    <section className="breadcrumb-section small-sec pt-0">
      <Img src="/assets/images/flights/flight-breadcrumb2.jpg" className="bg-img img-fluid " alt="" />
    </section>
  );
};

export default Banner;
