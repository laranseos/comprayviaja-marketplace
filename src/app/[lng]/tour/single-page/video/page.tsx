import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import SinglePage from "@/components/tour/single-page/common/single-page";
import VideoBanner from "@/components/tour/single-page/video/banner";

const InfoTab: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <VideoBanner />
      <SinglePage tab={true} side="right" />
    </CustomLayout>
  );
};

export default InfoTab;
