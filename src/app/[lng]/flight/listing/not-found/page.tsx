"use client";
import { FC, useEffect } from "react";

import CustomLayout from "@/layouts/layout";
import SearchSection from "@/components/flight/sidebar/left-sidebar/search-section/search-section.tsx";
import NotFound from "@/components/flight/sidebar/no-sidebar/not-found";
import Banner from "@/components/common/banner/image-banner";

const NoSidebar: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "66, 145, 184");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  
  return (
    <CustomLayout title="light_header custom-user-header" loader="flight" logo="dark">
      <Banner classSection={"breadcrumb-section small-sec pt-0"} img={"/assets/images/flights/flight-breadcrumb2.jpg"} />
      <SearchSection />
      <NotFound />
    </CustomLayout>
  );
};

export default NoSidebar;
