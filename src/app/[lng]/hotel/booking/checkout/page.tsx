"use client";
import Breadcrumb from "@/components/common/breadcrumb/page";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import Checkout from "@/components/hotels/booking/checkout/checkout-main";

const BookingPage: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light">
      <Breadcrumb title="Home" subTitle="booking" mainTitle="checkout" bannerImg={"/assets/images/inner-pages/bg-bread.jpg"} />
      <Checkout />
    </CustomLayout>
  );
};

export default BookingPage;
