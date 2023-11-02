import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import SuccessPage from "@/components/common/booking-page/success";

const Failed: FC = () => {
  return (
    <CustomLayout loader="food" title="light_header custom-user-header" logo="dark">
      <SuccessPage img="/assets/images/restaurant/order-success.png" title="Payment Successful ! get ready for comfortable stay." />
    </CustomLayout>
  );
};

export default Failed;
