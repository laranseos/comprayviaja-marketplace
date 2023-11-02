"use client";
import { FC } from "react";
import About from "@/components/home/restaurant/classic/about";
// import "@/public/assets/scss/color1.scss";
import HomeBanner from "@/components/home/restaurant/classic/home-banner";
import TopCategory from "@/components/home/restaurant/classic/top-category";
import CustomLayout from "@/layouts/layout";
import FilterMenu from "@/components/home/restaurant/classic/filter";
import Service from "@/components/home/restaurant/classic/service";
import Banner from "@/components/home/restaurant/classic/banner";
import Category from "@/components/home/restaurant/classic/category";
import BannerTwo from "@/components/home/restaurant/classic/banner-two";
import MenuSection from "@/components/home/restaurant/classic/menu-section";
import BookTable from "@/components/home/restaurant/classic/book-table";
import Reviews from "@/components/home/hotels/classic/reviews";
import Instagram from "@/components/home/restaurant/classic/instagram";

const Classic: FC = () => {
  return (
    <CustomLayout title="overlay-black" loader="food" userBgClass="user user-light">
      <HomeBanner />
      <TopCategory />
      <About />
      <FilterMenu />
      <Service />
      <Banner />
      <Category />
      <BannerTwo />
      <MenuSection />
      <BookTable />
      <Reviews />
      <Instagram />
    </CustomLayout>
  );
};

export default Classic;
