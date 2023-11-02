import { FC } from "react";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
// import "@/public/assets/scss/color1.scss";
import Banner from "@/components/hotels/single-pages/left-sidebar/banner";
import CustomLayout from "@/layouts/layout";

const Classic: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <Banner />
      <SinglePageSection side={"left"} />
    </CustomLayout>
  );
};

export default Classic;
