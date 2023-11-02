import Rating from "@/components/common/rating";
import { Review } from "@/constant/constant";
import { reviewData } from "@/data/hotels/single-page";
import { FC } from "react";

const Reviews: FC<IRoomProps> = ({ tab }) => {
  return (
    <div className="desc-box" id="review">
      <h4 className="content-title">review</h4>
      {tab && <h4 className="content-title">{Review}</h4>}
      <div className="menu-part page-section review">
        {reviewData.map((data: IReviewProps,index) => (
          <div className="review-box" key={index}>
            <Rating rang={data.range} />
            <h6>{data.title}</h6>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
