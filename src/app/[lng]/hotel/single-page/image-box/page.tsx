import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
import Banner from "@/components/hotels/single-pages/image-box/banner";
import CustomLayout from "@/layouts/layout";

const ImageBox: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <Banner />
      <SinglePageSection detail={true} side="right" tab={true} />
    </CustomLayout>
  );
};

export default ImageBox;
