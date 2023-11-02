"use client";
import { FC } from "react";
import FailedPage from "@/components/common/booking-page/failed";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";

const BookingFail: FC = () => {
  return (
    <CustomLayout title="light_header" logo="dark" userBgClass="user user-light">
      <FailedPage img="/assets/images/hotel/booking-failed.png" />
    </CustomLayout>
  );
};

export default BookingFail;
