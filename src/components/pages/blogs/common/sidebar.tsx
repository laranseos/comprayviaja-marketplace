import { FC } from "react";
import CategoriesPage from "./sidebar-content/categories";
import PopularPostPage from "./sidebar-content/popular-post";
import PopularTagPage from "./sidebar-content/popular-tag";

const Sidebar:FC = () => {
  return (
    <div className="sticky-cls-top">
      <div className="blog-sidebar">
        <div className="blog-wrapper">
          <div className="search-bar">
            <input type="text" placeholder="Search here.." />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <CategoriesPage />
        <PopularPostPage />
        <PopularTagPage />
      </div>
    </div>
  );
};

export default Sidebar;
