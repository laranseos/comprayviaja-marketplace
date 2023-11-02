"use client";
import { FC } from "react";
import Breadcrumb from "@/components/common/breadcrumb/page";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Booking from "@/components/hotels/booking/booking-page/booking-main-page";

const BookingPage: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light">
      <Breadcrumb title="Home" subTitle="holiday" mainTitle="booking" bannerImg={"/assets/images/tour/spain4.jpg"} />
      <Booking />
    </CustomLayout>
  );
};

export default BookingPage;
