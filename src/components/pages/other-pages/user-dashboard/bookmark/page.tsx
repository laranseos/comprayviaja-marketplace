import { FC } from "react";
import { bookmarks } from "@/data/pages/all-page";
import Img from "@/utils/BackgroundImageRatio";
import DashboardTitle from "../common/dashboard-title";

const Bookmark: FC = () => {
  return (
    <div className="dashboard-box">
      <DashboardTitle title={"my bookmark"} />
      <div className="product-wrapper-grid ratio3_2 special-section grid-box">
        <div className="row content grid">
          {bookmarks.map((bookmark, index) => (
            <div className="col-xl-4 col-sm-6 grid-item" key={index}>
              <div className="special-box">
                <div className="special-img">
                  <a href="#">
                    <Img src={bookmark.imgUrl} className="img-fluid bg-img" alt="" />
                  </a>
                  <div className="content_inner">
                    <a href="#">
                      <h5>{bookmark.title}</h5>
                    </a>
                    <h6>{bookmark.duration}</h6>
                  </div>
                  <div className="top-icon">
                    <a href="#" className="" data-bs-toggle="tooltip" data-placement="top" title="Remove from Wishlist">
                      <i className="fas fa-times"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
