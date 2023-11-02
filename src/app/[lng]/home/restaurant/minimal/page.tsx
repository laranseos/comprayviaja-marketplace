"use client"
import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import TopMenu from "@/components/home/restaurant/minimal/top-menu";
import Collection from "@/components/home/restaurant/minimal/collection";
import StepsRestaurant from "@/components/home/restaurant/minimal/steps";
import PopularRestaurant from "@/components/home/restaurant/minimal/popular-restaurant";
import AppFood from "@/components/home/restaurant/minimal/app";
import HomeBanner from "@/components/common/banner/restaurant-banner";

const Classic: FC = () => {
  return (
    <CustomLayout title="light_header" loader="food" logo="dark" userBgClass="user user-light rounded5">
      <HomeBanner />
      <TopMenu />
      <Collection />
      <StepsRestaurant />
      <PopularRestaurant />
      <AppFood />
    </CustomLayout>
  );
};

export default Classic;
