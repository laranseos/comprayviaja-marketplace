"use client"
import { PostComment } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import Sidebar from "../blogs/common/sidebar";
import PostDetail from "./post-detail";
import DetailPart from "./detail-part";
import CommentContent from "./comment-section";
import LeaveComment from "./leave-comment";
import { FC } from "react";
import TopSlider from "./top-slider";
import Video from "@/components/home/hotels/classic/video";
import TopVideo from "./top-video";

interface IBlogDetailProps {
  side: string;
  view?: string;
}
const BodyContent: FC<IBlogDetailProps> = ({ side, view }) => {
  return (
    <section className="section-b-space bg-white">
      <div className="container">
        <div className="row">
          {side !== "no" && (
            <div className={`col-lg-3 ${side === "right" ? "order-1" : ""}`}>
              <Sidebar />
            </div>
          )}
          <div className={` ${side === "no" ? "col-lg-12" : "col-lg-9"} `}>
            <div className="blog-single-detail">
              <div className="top-image">{view === "slide" ? <TopSlider /> : view === "video" ? <TopVideo /> : <Img src="/assets/images/portfolio/13.jpg" alt="" className="img-fluid " />}</div>
              <PostDetail />
              <DetailPart />
              <CommentContent />
              <LeaveComment />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
