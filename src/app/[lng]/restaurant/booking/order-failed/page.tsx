import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import FailedPage from "@/components/common/booking-page/failed";

const Failed: FC = () => {
  return (
    <CustomLayout loader="food" title="light_header custom-user-header" logo="dark">
      <FailedPage img="/assets/images/restaurant/order-failed.png" />
    </CustomLayout>
  );
};

export default Failed;
