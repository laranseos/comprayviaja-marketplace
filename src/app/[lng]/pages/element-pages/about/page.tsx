import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import AboutComponent2 from "@/components/home/hotels/classic/about";
import AboutComponent3 from "@/components/home/restaurant/classic/about";
import AboutComponent1 from "@/components/pages/elements/about/page";

const AboutElement: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"about"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <AboutComponent1 />
      <AboutComponent2 />
      <AboutComponent3 />
    </CustomLayout>
  );
};

export default AboutElement;
