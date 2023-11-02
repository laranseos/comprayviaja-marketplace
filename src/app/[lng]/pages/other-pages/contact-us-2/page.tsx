"use client"
import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Breadcrumb from "@/components/common/breadcrumb/page";
import ContactContent2 from "@/components/pages/other-pages/contact-us/contact-us-2";

const Contact2: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light">
      <Breadcrumb title={"home"} subTitle={"about us"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <ContactContent2 />
    </CustomLayout>
  );
};

export default Contact2;
