import { FC } from "react";
import SubscribeOne from "@/components/common/subscribe/page";
import BlogsComponent from "@/components/home/hotels/vector/blogs";
import Destination from "@/components/home/hotels/vector/destination";
import HomeBanner from "@/components/home/hotels/vector/home-banner";
import OfferComponent from "@/components/home/hotels/vector/offers";
import Start from "@/components/home/hotels/vector/start";
import CustomLayout from "@/layouts/layout";
// import "@/public/assets/scss/color1.scss";

const HotelVector: FC = () => {
  return (
    <CustomLayout title="light_header" logo="dark" footerPlace={true} userBgClass="user user-light rounded5">
      <HomeBanner />
      <OfferComponent />
      <Destination />
      <Start />
      <BlogsComponent />
      <SubscribeOne classSub="pt-0" />
    </CustomLayout>
  );
};
export default HotelVector;
