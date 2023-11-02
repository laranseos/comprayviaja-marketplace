import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Testimonial2 from "@/components/home/tour/modern/testimonial";
import Breadcrumb from "@/components/common/breadcrumb/page";
import Testimonial1 from "@/components/home/hotels/classic/reviews";

const TestimonialElement: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"testimonial"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <Testimonial1 />
      <div className="default-pt-0">
        <Testimonial2 />
      </div>
    </CustomLayout>
  );
};

export default TestimonialElement;
