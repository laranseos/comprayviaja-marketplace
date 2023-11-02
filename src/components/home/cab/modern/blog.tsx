import { FC } from "react";
import { New, OurBlog } from "@/constant/constant";
import BackgroundSection from "@/utils/HOC/background-section";
import CabAnimation from "@/components/common/animation/cab-animation";
import TitleComponent from "@/components/common/title/title";
import SliderTwo from "@/components/common/slider-components/slider2";
import { blogData } from "@/data/home/tour/tour-data";

const Blog: FC<IBlogComponentProps> = ({ title, btnClass }) => {
  return (
    <BackgroundSection titleClass={"blog-section section-b-space dark-cls animated-section"} img={"/assets/images/cab/grey-bg.jpg"} imgWidth={1905} imgHeight={703} position={"center"}>
      <CabAnimation />
      <div className="container">
        {title && <TitleComponent titleClass="title-1" title={New} subTitle={OurBlog} />}
        <SliderTwo slideData={blogData} classBtn="btn-curve" />
      </div>
    </BackgroundSection>
  );
};

export default Blog;
