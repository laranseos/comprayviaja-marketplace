"use client";
import { FC } from "react";
import TopSlider from "@/components/common/slider-components/top-slider";
import { topCategoryData } from "@/data/home/restaurant/resatuarant-data";

const TopCategory: FC = () => {
  return <TopSlider sliderData={topCategoryData} titleClass={"top-category margin-cls radius-cls"} />;
};

export default TopCategory;
