import { FC } from "react";
import BannerSlider from "@/components/hotels/single-pages/image-slider/banner-slider";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import SinglePageSection from "@/components/hotels/single-pages/common/single-page-section";
import { bannerImageData } from "@/data/hotels/single-page";

const ImageSlider: FC = () => {
  return (
    <CustomLayout logo={"dark"} title="light_header" userBgClass="user user-light rounded5" loader="pre">
      <BannerSlider data={bannerImageData} classSection="pt-0 " />
      <SinglePageSection side={"right"} tab={true} detail={true} />
    </CustomLayout>
  );
};

export default ImageSlider;
