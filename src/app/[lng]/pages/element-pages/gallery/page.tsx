import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import Gallery1 from "@/components/home/hotels/classic/gallery";
import Gallery2 from "@/components/home/tour/modern/gallery";

const ButtonElement: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"gallery"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <Gallery1 title={true} />
      <Gallery2 title={true} />
    </CustomLayout>
  );
};

export default ButtonElement;
