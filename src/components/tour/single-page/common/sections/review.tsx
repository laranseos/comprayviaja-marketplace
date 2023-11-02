import Rating from "@/components/common/rating";
import { FC } from "react";


const Review: FC<IReviewSliderProps> = ({ fullSlide }) => {
  return (
    <div className="menu-part tab-pane  review " id="review">
      {fullSlide && <h2 className="mb-3">Review</h2>}
      <div className="review-box">
        <Rating rang="Wonderful Experience...!!" />
        <h6>by xyz, jun 18, 2023</h6>
        <p>Our family holiday to Spain was awesome .pocket friendly rates that make planning a holiday a delight. I got a good hotels, flight discount for my round trip flight for the same trip while booking from sites.Thank you moment for giving us a wonderful experience.</p>
      </div>
      <div className="review-box">
        <Rating rang="Excellent Arrangements" />
        <h6>by xyz, jun 18, 2023</h6>
        <p>Rica holidays planned our family trip to Spain, it was so perfect. Everything was flawless, in-case if any confusions there was always someone to assist us at any point. Had a wonderful experience and thanks to these guys for making it happen. I would really recommend them for further vacation planning.</p>
      </div>
      <div className="review-box">
        <Rating rang="Best getaway destination with family" />
        <h6>by xyz, jun 18, 2023</h6>
        <p>Extremely happy with my trip to Spain. All the arrangements were spot on and cabs were punctual. Never had any hiccups and we enjoyed the trip immensely. Thanks you for organizing such a wonderful trip and taking care of all my special request with patience and skill.</p>
      </div>
    </div>
  );
};

export default Review;
