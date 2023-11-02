"use client"
import { FC, useEffect } from "react";
import CustomLayout from "@/layouts/layout";

import HomeBanner from "@/components/home/cab/classic/home-banner";
import AboutClassic from "@/components/home/cab/classic/about";
import EasyBooking from "@/components/home/cab/classic/easy-booking";
import CarType from "@/components/home/cab/classic/car-type";
import AppClassic from "@/components/home/cab/classic/app-classic";
import Testimonial from "@/components/home/cab/classic/testimonial";
import LogoCab from "@/components/home/cab/modern/logo-cab";

const ClassicCab: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "233, 179, 14");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  return (
    <CustomLayout title="overlay-black" userBgClass="user user-light rounded5">
      <HomeBanner />
      <AboutClassic />
      <EasyBooking />
      <CarType />
      <AppClassic />
      <Testimonial />
      <LogoCab />
    </CustomLayout>
  );
};

export default ClassicCab;
