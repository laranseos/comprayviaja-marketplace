import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import BodyContent from "@/components/pages/elements/image-ratio/page";
import ImageContent from "@/components/pages/elements/image-ratio/image-content";

const ImageRatio: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"Image Ratio"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <BodyContent />
      <ImageContent classTitle="ratio2_3" />
      <ImageContent classTitle="ratio_square" />
      <ImageContent classTitle="section-b-space ratio_portrait" />
    </CustomLayout>
  );
};

export default ImageRatio;
