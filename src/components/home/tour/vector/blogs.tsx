import SliderTwo from "@/components/common/slider-components/slider2";
import { blogData } from "@/data/home/tour/tour-data";

const BlogsComponent: React.FC = () => {
  return (
    <section className="blog-section section-b-space">
      <div className="container">
        <SliderTwo slideData={blogData} classBtn="btn btn-curve" />
      </div>
    </section>
  );
};

export default BlogsComponent;
