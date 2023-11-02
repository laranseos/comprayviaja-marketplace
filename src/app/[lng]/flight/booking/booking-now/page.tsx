"use client";
import { FC, useEffect } from "react";

import CustomLayout from "@/layouts/layout";
import BreadcrumbTwo from "@/components/common/breadcrumb/breadcrubs2";
import BookingNowComponent from "@/components/flight/booking/booking-now/page";

const BookingNow: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "66, 145, 184");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  
  return (
    <CustomLayout title="light_header custom-user-header" loader="no" logo="dark">
      <BreadcrumbTwo title="booking" />
      <BookingNowComponent />
    </CustomLayout>
  );
};

export default BookingNow;
