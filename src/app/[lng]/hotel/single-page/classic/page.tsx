// import "@/public/assets/scss/color1.scss";
import HomeBanner from "@/components/hotels/single-pages/classic/home-banner";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";

const Classic: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <HomeBanner />
      <SinglePageSection side="right" />
    </CustomLayout>
  );
};

export default Classic;
