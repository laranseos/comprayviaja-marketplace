import { FC } from "react";
import SubscribeOne from "@/components/common/subscribe/page";
import BookingTable from "@/components/home/tour/modern/booking-table";
import FullBanner from "@/components/home/tour/modern/full-banner";
import Gallery from "@/components/home/tour/modern/gallery";
import HomeBanner from "@/components/home/tour/modern/home-banner";
import NewOffers from "@/components/home/tour/modern/new-offer";
import Package from "@/components/home/tour/modern/package";
import ServiceComponent from "@/components/home/tour/modern/service";
import SpecialOffer from "@/components/home/tour/modern/special-offer";
import Testimonial from "@/components/home/tour/modern/testimonial";
import Video from "@/components/home/tour/modern/video";
import CustomLayout from "@/layouts/layout";
// import "@/public/assets/scss/color1.scss";

const Modern: FC = () => {
  return (
    <CustomLayout title="overlay-black" userBgClass="user user-light bg_dark" footerPlace={true}>
      <HomeBanner />
      <BookingTable />
      <NewOffers />
      <Video />
      <Package />
      <FullBanner />
      <Testimonial />
      <Gallery />
      <ServiceComponent />
      <SpecialOffer />
      <SubscribeOne />
    </CustomLayout>
  );
};
export default Modern;
