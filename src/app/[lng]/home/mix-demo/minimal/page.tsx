import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import OfferComponent from "@/components/home/hotels/vector/offers";
import Destination from "@/components/home/hotels/vector/destination";
import Start from "@/components/home/hotels/vector/start";
import BlogsComponent from "@/components/home/hotels/vector/blogs";
import SubscribeOne from "@/components/common/subscribe/page";
import HomeBanner from "@/components/home/mix-demo/minimal/home-banner";

const Minimal: FC = () => {
  return (
    <CustomLayout title="light_header mix-2" userBgClass="user user-light rounded5" logo="dark" footerPlace={true}>
      <HomeBanner />
      <OfferComponent />
      <Destination />
      <Start />
      <BlogsComponent />
      <SubscribeOne classSub="pt-0" />
    </CustomLayout>
  );
};

export default Minimal;
