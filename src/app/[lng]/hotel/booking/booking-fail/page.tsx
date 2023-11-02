"use client";
import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import FailedPage from "@/components/common/booking-page/failed";

const BookingFail: FC = () => {
  return (
    <CustomLayout title="light_header" logo="dark" userBgClass="user user-light">
      <FailedPage img="/assets/images/hotel/booking-failed.png" />
    </CustomLayout>
  );
};

export default BookingFail;
