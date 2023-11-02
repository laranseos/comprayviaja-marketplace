"use client";
import { FC, useEffect } from "react";

import CustomLayout from "@/layouts/layout";
import BannerCab from "@/components/cab/listing/list-view/common/banner-cab";
import SuccessPage from "@/components/common/booking-page/success";

const BookingSuccess: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "233, 179, 14");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  return (
    <CustomLayout title="light_header custom-user-header">
      <BannerCab title={" booking success"} />
      <SuccessPage img="/assets/images/cab/car/2.png" title="Payment Successful ! get ready to ride" />
    </CustomLayout>
  );
};

export default BookingSuccess;
