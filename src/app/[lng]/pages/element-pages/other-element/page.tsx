import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import LogoCab from "@/components/home/cab/modern/logo-cab";
import Instagram from "@/components/home/restaurant/classic/instagram";

const ButtonElement: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"other element"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <Instagram title={true} />
      <LogoCab title={true} />
    </CustomLayout>
  );
};

export default ButtonElement;
