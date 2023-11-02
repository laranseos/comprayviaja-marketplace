import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import BodyContent from "@/components/pages/elements/date-time/page";

const DateTimeElement: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"date time picker"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <BodyContent />
    </CustomLayout>
  );
};

export default DateTimeElement;
