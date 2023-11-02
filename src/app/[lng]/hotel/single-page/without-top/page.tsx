import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
import CustomLayout from "@/layouts/layout";

const WithoutTop: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <SinglePageSection detail={true} side="right" tab={true} />
    </CustomLayout>
  );
};

export default WithoutTop;
