"use client";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import { FC, useEffect } from "react";
import HomeBanner from "@/components/common/banner/restaurant-banner";
import NotFoundPage from "@/components/restaurant/listing/not-found";

const FullWidth: FC = () => {
  return (
    <CustomLayout logo="dark" title="light_header" userBgClass="user user-light" loader="food">
      <HomeBanner />
      <NotFoundPage />
    </CustomLayout>
  );
};

export default FullWidth;
