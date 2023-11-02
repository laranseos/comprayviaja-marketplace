import SliderFive from "@/components/common/slider-components/slide5";
import TitleThree from "@/components/common/title/title-three";
import { flightBlogData } from "@/data/home/flight/flight-data";
import { FC } from "react";

const Blog: FC = () => {
  return (
    <section className="blog_section section-b-space ratio_55">
      <div className="container">
        <TitleThree classTitle={"title-1"} title="rica" subTitle="latest blog" />
        <SliderFive slideData={flightBlogData} />
      </div>
    </section>
  );
};

export default Blog;
