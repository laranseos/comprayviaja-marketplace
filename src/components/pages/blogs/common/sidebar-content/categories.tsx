import { Categories } from "@/constant/constant";
import { FC } from "react";

const CategoriesPage: FC = () => {
  const categoryItems = ["Lorem Ipsum Is Simple", "Many Variations", "random text", "lorem ipsum.", "it's Random."];

  return (
    <div className="blog-wrapper">
      <div className="sidebar-title">
        <h5>{Categories}</h5>
      </div>
      <div className="sidebar-content">
        <ul className="sidebar-list">
          {categoryItems.map((item, index) => (
            <li key={index} className="">
              <a href="#">
                <i aria-hidden="true" className="fa fa-angle-right"></i>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesPage;
