import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import SubscribeComp from "@/components/home/flight/modern/subscribe";
import SubscribeOne from "@/components/common/subscribe/page";
import SubscribeComponent from "@/components/home/hotels/classic/subscribe";

const Subscribe: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" loader="no" logo="dark">
      <SubscribeComponent />
      <SubscribeOne />
      <SubscribeComp />
    </CustomLayout>
  );
};

export default Subscribe;
