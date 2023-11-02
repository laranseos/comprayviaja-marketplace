import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import MainSinglePage from "@/components/restaurant/single-page/classic/single-page";
import BannerSlider from "@/components/hotels/single-pages/image-slider/banner-slider";
import { bannerImageData } from "@/data/restaurant/single-page";
import TopTitleBar from "@/components/restaurant/single-page/common/top-title/page";

const ImageSlider: FC = () => {
  return (
    <CustomLayout loader="pre" title="light_header custom-user-header" logo="dark">
      <BannerSlider classSection="pt-0 variable-width-height" data={bannerImageData} />
      <TopTitleBar />
      <MainSinglePage side={"right"} cartItem="empty" />
    </CustomLayout>
  );
};

export default ImageSlider;
