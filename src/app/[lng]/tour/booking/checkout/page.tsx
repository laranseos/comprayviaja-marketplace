"use client";
import { FC } from "react";
import Breadcrumb from "@/components/common/breadcrumb/page";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Checkout from "@/components/hotels/booking/checkout/checkout-main";

const BookingPage: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light">
      <Breadcrumb title="Home" subTitle="review" mainTitle="checkout" bannerImg={"/assets/images/tour/spain4.jpg"} class1="pt-0" />
      <Checkout />
    </CustomLayout>
  );
};

export default BookingPage;
