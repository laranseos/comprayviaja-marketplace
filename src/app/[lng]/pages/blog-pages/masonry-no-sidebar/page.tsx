// import "@/public/assets/scss/color1.scss";
import Breadcrumb from "@/components/common/breadcrumb/page";
import CustomLayout from "@/layouts/layout";
import { FC } from "react";
import { masonryBlogsData } from "@/data/pages/blogs";
import BlogContent from "@/components/pages/blogs/common/blog-content/page";

const MasonryNoSidebar: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" logo={"dark"} loader="pre">
      <Breadcrumb title="Home" subTitle="blog" bannerImg={"/assets/images/tour/inner-page/breadcrumb.jpg"} />
      <BlogContent value={masonryBlogsData} side="no" view={"masonry"} sectionClass />
    </CustomLayout>
  );
};

export default MasonryNoSidebar;
