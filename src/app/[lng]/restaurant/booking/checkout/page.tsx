import { FC } from "react";
import Banner from "@/components/common/banner/image-banner";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import CheckoutPage from "@/components/restaurant/booking/checkout/page";

const Checkout: FC = () => {
  return (
    <CustomLayout loader="food" title="light_header custom-user-header" logo="dark">
      <Banner classSection={"not-found order-food-section pt-0"} img={"/assets/images/restaurant/background/1.jpg"} />
      <CheckoutPage />
    </CustomLayout>
  );
};

export default Checkout;
