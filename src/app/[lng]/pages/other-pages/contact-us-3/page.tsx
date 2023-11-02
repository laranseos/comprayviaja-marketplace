"use client"
import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import ContactContent from "@/components/pages/other-pages/contact-us/contact-us1";
import GoogleMapComponent from "@/components/common/map/google-map";
import Breadcrumb from "@/components/common/breadcrumb/page";

const Contact3: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light">
      <Breadcrumb title={"home"} subTitle={"about us"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <ContactContent />
      <section className="contact-bottom pt-0">
        <div className="contact-map h-100 mt-0">
          <GoogleMapComponent />
        </div>
      </section>
    </CustomLayout>
  );
};

export default Contact3;
