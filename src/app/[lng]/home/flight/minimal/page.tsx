"use client"
import { FC, useEffect } from "react";
import CustomLayout from "@/layouts/layout";

import HomeBanner from "@/components/home/flight/minimal/home-banner";
import HolidayPackage from "@/components/home/flight/minimal/holiday-package";
import DiscountBanner from "@/components/home/flight/minimal/discount";
import BestOffer from "@/components/home/flight/minimal/best-offer";
import AppOffer from "@/components/home/flight/minimal/app-offer";
import BlogsComponent from "@/components/home/flight/minimal/blog";

const MinimalFlight: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "66, 145, 184");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  return (
    <CustomLayout title="overlay-white" footerPlace={true} userBgClass="user user-light">
      <HomeBanner />
      <HolidayPackage />
      <DiscountBanner />
      <BestOffer />
      <AppOffer />
      <BlogsComponent btnClass="btn btn-rounded btn-sm color1" sectionClass="dark-cls bg-size blur-up lazyloaded" />
    </CustomLayout>
  );
};

export default MinimalFlight;
