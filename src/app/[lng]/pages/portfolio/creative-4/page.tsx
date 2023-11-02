"use client";
import GridView from "@/components/pages/common/grid-view";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import { masonryData } from "@/data/pages/all-page";

const Creative4: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"}>
      <Breadcrumb title="Home" subTitle="portfolio" bannerImg={"/assets/images/tour/inner-page/breadcrumb.jpg"} />
      <div className="ratio_square overflow-hidden">
        <GridView value={masonryData} view="creative" />
      </div>
    </CustomLayout>
  )
};

export default Creative4;
