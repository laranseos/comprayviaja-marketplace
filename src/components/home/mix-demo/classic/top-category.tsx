"use client";
import TopSlider from "@/components/common/slider-components/top-slider";
import { mixCategoryData } from "@/data/home/mix-demo/mix-data";
import { topCategoryData } from "@/data/home/restaurant/resatuarant-data";
import { FC } from "react";

interface ITopCategoryProps {
  type: string;
  titleClass: string;
}
const TopCategory: FC<ITopCategoryProps> = ({ type, titleClass }) => {
  return <TopSlider titleClass={titleClass} sliderData={type === "mix" ? mixCategoryData : topCategoryData} />;
};

export default TopCategory;
