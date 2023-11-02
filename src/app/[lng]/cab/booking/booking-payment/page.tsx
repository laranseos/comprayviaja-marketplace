"use client";
import { FC, useEffect } from "react";

import CustomLayout from "@/layouts/layout";
import BannerCab from "@/components/cab/listing/list-view/common/banner-cab";
import PaymentPage from "@/components/cab/booking/payment";

const BookingPayment: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "233, 179, 14");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  return (
    <CustomLayout title="light_header custom-user-header" loader="no">
      <BannerCab title={" cab payment"} />
      <PaymentPage />
    </CustomLayout>
  );
};

export default BookingPayment;
