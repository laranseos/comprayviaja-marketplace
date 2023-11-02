import { PopularTags } from "@/constant/constant";
import { FC } from "react";

const PopularTag: FC = () => {
  const popularTags = ["adventure", "luxury", "romantic", "foodie", "villas", "cruise", "shopping", "beach", "family"];

  return (
    <div className="blog-wrapper">
      <div className="sidebar-title">
        <h5>{PopularTags}</h5>
      </div>
      <div className="sidebar-content">
        <ul className="tags">
          {popularTags.map((tag, index) => (
            <li key={index}>
              <a href="#">{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularTag;
