"use client";
import { FC, useEffect } from "react";

import CustomLayout from "@/layouts/layout";
import BannerCab from "@/components/cab/listing/list-view/common/banner-cab";
import Search from "@/components/cab/listing/list-view/common/search";
import NotFoundComponent from "@/components/cab/listing/not-found/page";

const NotFound: FC = () => {
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
      <BannerCab title={"no result"} />
      <Search />
      <NotFoundComponent />
    </CustomLayout>
  );
};

export default NotFound;
