import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import Blog1 from "@/components/home/hotels/minimal/blog";
import Blog3 from "@/components/home/flight/modern/blog";
import Blog2 from "@/components/home/cab/modern/blog";

const ElementBlog: FC = () => {
  return (
    <CustomLayout title="inner-page" userBgClass="user user-light" loader="no">
      <Breadcrumb title={"element"} subTitle={"Blog"} bannerImg={"/assets/images/inner-bg.jpg"} />
      <Blog1 classTitle="blog_section blog-inner ratio_55 section-b-space overflow-hidden" title={false} />
      <Blog2 title={false} />
      <Blog3 title={false} />
    </CustomLayout>
  );
};

export default ElementBlog;
