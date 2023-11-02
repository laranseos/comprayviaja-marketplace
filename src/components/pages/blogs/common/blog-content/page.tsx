import { FC } from "react";
import Sidebar from "../sidebar";
import ContentPage from "./content";
import MixTopContent from "./mix-topbar";

const BlogContent: FC<IBlogContentProps> = ({ value, side, size, view, mix,sectionClass }) => {
  return (
    <section className={`section-b-space bg-white ${sectionClass ?"portfolio-section":""}`}>
      <div className="container">
        <div className="row">
          {side !== "no" && (
            <div className={`col-lg-3 ${side === "right" ? "order-1" : ""}`}>
              <Sidebar />
            </div>
          )}
          <div className={`${side === "no" ? "col-lg-12" : "col-lg-9"}`}>
            <div className={`${view === "masonry" ? "row content grid blog-masonry" : "blog_section blog-inner"}  ${view === "creative" || view === "list" ? "ratio_landscape" : "ratio_55"}`}>
              {mix && <MixTopContent />}
              <ContentPage slideData={value} size={size} view={view} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
