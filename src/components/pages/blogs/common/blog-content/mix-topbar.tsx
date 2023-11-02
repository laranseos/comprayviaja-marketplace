import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";
import { FC } from "react";

const MixTopContent: FC = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="blog-wrap">
          <div className="blog-image">
          <Link href="/pages/blog-detail/left-sidebar">
              <Img src="/assets/images/portfolio/13.jpg" className="img-fluid" alt="" />
            </Link>
          </div>
          <div className="blog-details">
            <div>
              <h6>
                <i className="fas fa-map-marker-alt"></i> phonics, newyork
                <i className="fas fa-clock ms-2"></i> 20 april, 2023
              </h6>
              <Link href="/pages/blog-detail/left-sidebar">
                <h5>Twice profit than before you. </h5>
              </Link>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...</p>
              <h6 className="link">
              <Link href="/pages/blog-detail/left-sidebar">read more</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixTopContent;
