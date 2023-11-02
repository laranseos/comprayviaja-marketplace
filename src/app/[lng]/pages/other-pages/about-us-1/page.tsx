import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import OurTeamContent from "@/components/pages/other-pages/about-us/our-team";
import AboutUsContent from "@/components/pages/other-pages/about-us/page";
import CustomLayout from "@/layouts/layout";
import Testimonial from "@/components/home/tour/modern/testimonial";
import FactsContent from "@/components/pages/other-pages/about-us/fact";
import Blog from "@/components/pages/other-pages/about-us/blog";

const AboutUs1: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light">
      <Breadcrumb title={"home"} subTitle={"about us"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <AboutUsContent side="left" />
      <OurTeamContent />
      <Testimonial />
      <FactsContent />
      <Blog />
    </CustomLayout>
  );
};

export default AboutUs1;
