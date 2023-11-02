import { FC } from "react";

const TopSection: FC = () => {
  return (
    <div className="blog-wrapper">
      <div className="search-bar">
        <input type="text" placeholder="Search here.." />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopSection;
