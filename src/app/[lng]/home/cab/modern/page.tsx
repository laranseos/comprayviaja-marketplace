import { FC } from "react";
import CustomLayout from "@/layouts/layout";
// import "@/public/assets/scss/color1.scss";
import HomeBanner from "@/components/home/cab/modern/home-banner";
import OurVehicleComponent from "@/components/home/cab/modern/our-vehicle";
import VehicleVideo from "@/components/home/cab/modern/vehicle-video";
import Service from "@/components/home/cab/modern/service";
import BookingDeal from "@/components/home/cab/modern/booking-deal";
import CabAbout from "@/components/home/cab/modern/about";
import AppCab from "@/components/home/cab/modern/app-cab";
import Blog from "@/components/home/cab/modern/blog";
import LogoCab from "@/components/home/cab/modern/logo-cab";

const Modern: FC = () => {
  return (
    <CustomLayout coupon={true} userBgClass="user user-light rounded5">
      <HomeBanner />
      <OurVehicleComponent />
      <VehicleVideo />
      <Service />
      <BookingDeal />
      <CabAbout />
      <AppCab />
      <Blog btnClass="btn btn-curve" />
      <LogoCab />
    </CustomLayout>
  );
};

export default Modern;
