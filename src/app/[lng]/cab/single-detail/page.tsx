"use client";
import { FC, useEffect } from "react";

import CustomLayout from "@/layouts/layout";
import BannerCab from "@/components/cab/listing/list-view/common/banner-cab";
import SingleDetailPage from "@/components/cab/single-detail/page";

const BookingSinglePage: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "233, 179, 14");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  return (
    <CustomLayout title="light_header" logo="dark" userBgClass="user user-light">
      <BannerCab title={" cab detail"} />
      <SingleDetailPage />
    </CustomLayout>
  );
};

export default BookingSinglePage;
