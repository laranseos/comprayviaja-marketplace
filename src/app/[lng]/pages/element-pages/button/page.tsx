import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import BodyContent from "@/components/pages/elements/button/page";

const ButtonElement: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"button"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <BodyContent />
    </CustomLayout>
  );
};

export default ButtonElement;
