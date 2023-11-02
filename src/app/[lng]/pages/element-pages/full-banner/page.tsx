import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import FullBanner1 from "@/components/home/tour/modern/full-banner";
import FullBanner2 from "@/components/home/flight/modern/full-banner";

const DateTimeElement: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" loader="no" logo="dark">
      <FullBanner1 />
      <FullBanner2 />
    </CustomLayout>
  );
};

export default DateTimeElement;
