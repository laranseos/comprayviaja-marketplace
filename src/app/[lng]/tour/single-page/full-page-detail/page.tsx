import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Banner from "@/components/tour/single-page/tabs/banner";
import SinglePage from "@/components/tour/single-page/common/single-page";

const FullPage: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <Banner />
      <SinglePage side="right" />
    </CustomLayout>
  );
};

export default FullPage;
