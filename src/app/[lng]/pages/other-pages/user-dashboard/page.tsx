import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Breadcrumb from "@/components/common/breadcrumb/page";
import BodyContent from "@/components/pages/other-pages/user-dashboard/page";

const UserDashboard: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"home"} subTitle={"dashboard"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <BodyContent />
    </CustomLayout>
  );
};

export default UserDashboard;
