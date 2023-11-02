"use client"
import { FC, useEffect } from "react";
import CustomLayout from "@/layouts/layout";

import MainSection from "@/components/home/cab/map/main-section";

const MapCab: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "233, 179, 14");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  return (
    <CustomLayout title="light_header absolute-header" logo="dark" hideFooter={true} userBgClass="user user-light">
      <MainSection />
    </CustomLayout>
  );
};

export default MapCab;
