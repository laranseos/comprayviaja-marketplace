import { FC } from "react";
import CustomLayout from "@/layouts/layout";
// import "@/public/assets/scss/color1.scss";
import HomeBanner from "@/components/home/flight/modern/home-banner";
import Destination from "@/components/home/flight/modern/destination";
import AirlinesDetail from "@/components/home/flight/modern/airlines-detail";
import FlightRoute from "@/components/home/flight/modern/flight-route";
import FullBanner from "@/components/home/flight/modern/full-banner";
import AirlineTickets from "@/components/home/flight/modern/airline-tickets";
import TopDestination from "@/components/home/flight/modern/top-destination";
import Blog from "@/components/home/flight/modern/blog";
import SubscribeComp from "@/components/home/flight/modern/subscribe";

const Modern: FC = () => {
  return (
    <CustomLayout title="overlay-white" footerPlace={true} userBgClass="user rounded5">
      <HomeBanner />
      <Destination />
      <AirlinesDetail />
      <FlightRoute />
      <FullBanner />
      <AirlineTickets />
      <TopDestination />
      <Blog />
      <SubscribeComp />
    </CustomLayout>
  );
};

export default Modern;
