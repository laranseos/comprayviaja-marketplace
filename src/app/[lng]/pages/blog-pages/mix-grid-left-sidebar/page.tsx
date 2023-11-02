// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import { blogsData } from "@/data/pages/blogs";
import BlogContent from "@/components/pages/blogs/common/blog-content/page";

const MixLeftSidebar: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"} loader="pre">
      <Breadcrumb title="Home" subTitle="blog" bannerImg={"/assets/images/tour/inner-page/breadcrumb.jpg"} />
      <BlogContent value={blogsData} side="left" mix={true} />
    </CustomLayout>
  );
};

export default MixLeftSidebar;
