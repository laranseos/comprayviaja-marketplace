"use client";
import { FC, useState } from "react";
import Rating from "@/components/common/rating";
import TitleFive from "@/components/common/title/title-five";
import { Breakfast } from "@/constant/constant";
import { filterMenuData, filterOption } from "@/data/home/restaurant/resatuarant-data";
import Img from "@/utils/BackgroundImageRatio";
import useOutsideDropdown from "@/utils/useOutsideDropdown";

const FilterMenu: FC = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const [category, setCategory] = useState("all");
  const [filteredMenu, setFilteredMenu] = useState(filterMenuData);

  const filterClick = (type: string) => {
    setCategory(type);
    if (type === "all") {
      setFilteredMenu(filterMenuData);
    } else {
      const filtered = filterMenuData.filter((data) => data.type === type);
      setFilteredMenu(filtered);
    }
  };

  return (
    <section className="filter-section section-b-space">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="top-section">
              <TitleFive title={Breakfast} subTitle="Special customized your breakfast" />
              <div className="coupon">
                <h6>coupon code: FGR4568</h6>
              </div>
              <div className="filters filter-button-group">
                <div ref={ref} className={`filter-btn ${isComponentVisible ? "active" : ""}`} onClick={() => setIsComponentVisible(!isComponentVisible)}>
                  <h6>
                    {" "}
                    filter <i className="fas fa-sort-down"></i>
                  </h6>
                </div>
                <ul className="filter-content">
                  {filterOption.map((item,index) => (
                    <li key={index} onClick={() => filterClick(item.type)} className={category === item.type ? "active" : ""}>
                      {item.type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row content grid">
          {filteredMenu.map((data,index) => (
            <div className={`col-lg-2 col-md-4 col-6  grid-item ${data.type}`} key={index}>
              <div className="img-part">
                <Img src={data.img} alt="" />
                <a href="#" className="up-btn">
                  <i className="fas fa-arrow-up"></i>
                </a>
              </div>
              <div className="filter-detail">
                <h6>{data.title}</h6>
                <Rating />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterMenu;
