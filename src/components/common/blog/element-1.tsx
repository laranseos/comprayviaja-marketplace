import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";
import { FC } from "react";

const BodyContent: FC<IBlogsElementProps> = ({ data, view }) => {
  return (
    <>
      <div className={`blog-wrap wow fadeInUp`}>
        <div className={`blog-image ${view === "creative" ? (data.id % 2 == 0 ? "order-md-1" : "") : ""}`}>
          <Img src={data.img} className=" bg-img" alt="" />
          <div className={`blog-label`}>
            <div>
              <h3>{data.date}</h3>
              <h6>{data.month}</h6>
            </div>
          </div>
        </div>
        <div className="blog-details">
          <div>
            <h6>
              <i className={`fas fa-map-marker-alt`}></i>
              {data.location}
              {view === "creative" && <i className="fas fa-clock ms-2"> 20 april, 2023</i>}
            </h6>
            <Link href="/pages/blog-detail/left-sidebar">
              <h5>{data.title}</h5>
            </Link>
            <p>{data.desc}</p>
            {view === "creative" && "list" && (
              <h6 className="link">
                <Link href="/pages/blog-detail/left-sidebar">read more</Link>
              </h6>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyContent;
