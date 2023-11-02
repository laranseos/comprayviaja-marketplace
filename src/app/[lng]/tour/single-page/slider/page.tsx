import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Banner from "@/components/tour/single-page/slider/banner";
import SinglePage from "@/components/tour/single-page/common/single-page";

const Slider: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <Banner />
      <SinglePage side="right" tab={true} />
    </CustomLayout>
  );
};

export default Slider;
