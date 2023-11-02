import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import ServicesComponent1 from "@/components/home/cab/modern/service";
import ServicesComponent2 from "@/components/home/hotels/classic/services";
import ServiceComponent3 from "@/components/home/tour/modern/service";
import ServiceComponent4 from "@/components/home/hotels/minimal/start";

const Service: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"service"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <ServicesComponent1 />
      <ServicesComponent2 />
      <ServiceComponent3 />
      <ServiceComponent4 />
    </CustomLayout>
  );
};

export default Service;
