import SliderTwo from "@/components/common/slider-components/slider2";
import { blogData } from "@/data/home/flight/flight-data";
import Img from "@/utils/BackgroundImageRatio";

const BlogsComponent: React.FC<IBlogComponentProps> = ({ sectionClass }) => {
  return (
    <section className={`blog-section section-b-space ${sectionClass?sectionClass:""}`}>
      <Img src="/assets/images/cab/grey-bg.jpg" alt="" className="img-fluid blur-up lazyload bg-img" style={{display: 'none'}} />
      <div className="container">
        <SliderTwo slideData={blogData} classBtn="btnClass btn-rounded btn-sm" />
      </div>
    </section>
  );
};

export default BlogsComponent;
