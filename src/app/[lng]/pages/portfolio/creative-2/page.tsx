"use client";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import BodyContent from "@/components/pages/portfolio/creative-2/page";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";

const Creative2: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"}>
      <Breadcrumb title="Home" subTitle="portfolio" bannerImg={"/assets/images/tour/inner-page/breadcrumb.jpg"} />
      <BodyContent />
    </CustomLayout>
  );
};

export default Creative2;
