import { FC } from "react";
import Banner from "@/components/restaurant/single-page/classic/banner";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import MainSinglePage from "@/components/restaurant/single-page/classic/single-page";

const Classic: FC = () => {
  return (
    <CustomLayout loader="pre" title="light_header custom-user-header" logo="dark">
      <Banner />
      <MainSinglePage side={"right"} />
    </CustomLayout>
  );
};

export default Classic;
