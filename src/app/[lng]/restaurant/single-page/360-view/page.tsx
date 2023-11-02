import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import MainSinglePage from "@/components/restaurant/single-page/classic/single-page";
import TopTitleBar from "@/components/restaurant/single-page/common/top-title/page";
import BannerImage from "@/components/restaurant/single-page/360/banner";

const View360: FC = () => {
  return (
    <CustomLayout loader="good" title="light_header custom-user-header" logo="dark">
      <BannerImage />
      <TopTitleBar />
      <MainSinglePage side="right" cartItem="empty" />
    </CustomLayout>
  );
};

export default View360;
