"use client"
import { FC, useEffect } from "react";
import CustomLayout from "@/layouts/layout";

import MobileBanner from "@/components/home/flight/left-sidebar/mobile-section";
import SidebarSection from "@/components/home/flight/left-sidebar/sidebar-section";
import DesktopBanner from "@/components/home/flight/left-sidebar/desktop-banner";
import Airline from "@/components/home/flight/left-sidebar/airline";
import AirlineDetail from "@/components/home/flight/left-sidebar/airline-detail";
import AirlineDestination from "@/components/home/flight/left-sidebar/airline-destination";
import FooterComponent from "@/layouts/footer/footer";

const LeftSidebarFlight: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "66, 145, 184");
    document.documentElement.style.setProperty("--theme-color2", "239, 63, 62");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  
  return (
    <>
      <CustomLayout title="light_header fixed-header" logo="dark" footerPlace={true} userBgClass="user user-light" hideFooter={true}>
        <MobileBanner />
        <SidebarSection />
        <div className="scroll-body">
          <DesktopBanner />
          <Airline />
          <AirlineDetail />
          <AirlineDestination />
          <FooterComponent footerClass="footer-light" />
        </div>
      </CustomLayout>
    </>
  );
};

export default LeftSidebarFlight;
