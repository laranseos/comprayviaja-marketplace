"use client"
import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import BreadcrumbsContent from "@/components/pages/other-pages/contact-us/breadcrumbs";
import ContactContent from "@/components/pages/other-pages/contact-us/contact-us1";

const Contact1: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light">
      <BreadcrumbsContent />
      <ContactContent />
    </CustomLayout>
  );
};

export default Contact1;
