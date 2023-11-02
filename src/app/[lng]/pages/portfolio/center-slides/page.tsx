"use client";
import BodyContent from "@/components/pages/portfolio/center-slider/page";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";

const CenterSlider: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"} footerPlace={true}>
      <BodyContent />
    </CustomLayout>
  );
};

export default CenterSlider;
