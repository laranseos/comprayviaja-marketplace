import { FC } from "react";
import Link from "next/link";

const MasonryBlog: FC<IBlogsElementProps> = ({ data }) => {
  return (
    <div className="grid-item wow fadeInUp col-sm-6">
      <div className="overlay">
        <div className="portfolio-image">
        <Link href="/pages/blog-detail/left-sidebar">
            <img src={data.img} alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="blog-details">
          <h6>
            <i className="fas fa-map-marker-alt"></i> {data.location}
            <i className="fas fa-clock ms-2"></i> {data.date}
          </h6>
          <Link href="/pages/blog-detail/left-sidebar">
            <h5>{data.title}</h5>
          </Link>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...</p>
          <h6 className="link">
          <Link href="/pages/blog-detail/left-sidebar">read more</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MasonryBlog;
