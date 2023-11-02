import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import FullSlider from "@/components/tour/single-page/full-page-slider/full-slider";

const FullPageSlider: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5">
      <FullSlider />
    </CustomLayout>
  );
};

export default FullPageSlider;
