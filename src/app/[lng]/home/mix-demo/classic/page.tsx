import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import AboutComponent from "@/components/home/hotels/classic/about";
import Video from "@/components/home/tour/modern/video";
import FullBanner from "@/components/home/tour/modern/full-banner";
import CabAbout from "@/components/home/cab/modern/about";
import VideoHotel from "@/components/home/hotels/classic/video";
import Category from "@/components/home/restaurant/classic/category";
import Gallery from "@/components/home/hotels/classic/gallery";
import SubscribeOne from "@/components/common/subscribe/page";
import Destination from "@/components/home/flight/modern/destination";
import TopCategory from "@/components/home/mix-demo/classic/top-category";
import HomeBanner from "@/components/home/mix-demo/classic/home-banner";

const Classic: FC = () => {
  return (
    <CustomLayout title="overlay-black" userBgClass="user user-light" footerPlace={true}>
      <HomeBanner />
      <TopCategory type="mix" titleClass="top-category margin-cls radius-cls" />
      <AboutComponent classRound="section-b-space" />
      <Video />
      <Destination />
      <FullBanner />
      <CabAbout />
      <VideoHotel />
      <Category />
      <Gallery />
      <SubscribeOne />
    </CustomLayout>
  );
};

export default Classic;
