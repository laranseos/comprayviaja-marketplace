import { FC } from "react";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
// import "@/public/assets/scss/color1.scss";

import Banner from "@/components/hotels/single-pages/info-tab/banner";
import CustomLayout from "@/layouts/layout";

const InfoTab: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <Banner />
      <SinglePageSection side={"right"} tab={true} detail={true} />
    </CustomLayout>
  );
};

export default InfoTab;
