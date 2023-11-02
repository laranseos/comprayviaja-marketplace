"use client"
import { FC, useEffect } from "react";
import HomeBanner from "@/components/home/tour/trending/home-banner";
import CustomLayout from "@/layouts/layout";

import SearchTrending from "@/components/home/tour/trending/search-trending";
import HolidayPackage from "@/components/home/tour/trending/holiday-package";
import Explore from "@/components/home/tour/trending/explore";
import ExploreTheme from "@/components/home/tour/trending/explore-theme";
import Reviews from "@/components/home/hotels/classic/reviews";

const Trending: FC = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color1", "127, 180, 212");
    document.documentElement.style.setProperty("--theme-color2", "0, 162, 247");

    return () => {
      document.documentElement.style.setProperty("--theme-color1","239, 63, 62");
      document.documentElement.style.setProperty("--theme-color2","0, 162, 247");
    };
  }, []);
  return (
    <CustomLayout title="tour-header" footerPlace={true} footer={"footer2"} userBgClass="user user-light rounded5">
      <HomeBanner />
      <SearchTrending />
      <HolidayPackage />
      <Explore />
      <ExploreTheme />
      <Reviews />
    </CustomLayout>
  );
};

export default Trending;
