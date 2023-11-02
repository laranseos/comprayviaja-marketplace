import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import BannerImgComponent from "@/components/tour/single-page/common/banner";
import MainPage from "@/components/tour/single-page/classic-design/main-page";

const ClassicDesign: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <section className="home_section p-0">
        <BannerImgComponent bannerImg="/assets/images/inner-pages/breadcrumb1.jpg" animation={true} />
      </section>
      <MainPage />
    </CustomLayout>
  );
};

export default ClassicDesign;
