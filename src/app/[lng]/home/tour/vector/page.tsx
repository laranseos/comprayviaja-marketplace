"use client"
import { FC, useEffect } from "react";

import SubscribeOne from "@/components/common/subscribe/page";
import Destination from "@/components/home/hotels/vector/destination";
import Start from "@/components/home/hotels/vector/start";
import CustomLayout from "@/layouts/layout";
import HomeBanner from "@/components/home/tour/vector/home-banner";
import ExploreTheme from "@/components/home/tour/vector/explore-theme";
import FullBanner from "@/components/home/tour/vector/full-banner";
import BlogsComponent from "@/components/home/tour/vector/blogs";

const TourVector: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "127, 180, 212");
    document.documentElement.style.setProperty("--theme-color2", "0, 162, 247");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  return (
    <CustomLayout title="" footerPlace={true} coupon={true}>
      <HomeBanner />
      <ExploreTheme />
      <Start />
      <Destination />
      <FullBanner />
      <BlogsComponent />
      <SubscribeOne classSub="pt-0" />
    </CustomLayout>
  );
};
export default TourVector;
