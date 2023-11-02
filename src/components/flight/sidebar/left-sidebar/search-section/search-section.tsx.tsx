"use client";
import { FC, useState } from "react";
import SearchForm from "./SearchForm";

const SearchSection: FC = () => {
  const [formOpen, setFormOpen] = useState(false)
  const toggleForm = ()=>setFormOpen(!formOpen)
  return (
    <div className="bg-inner small-section pb-0">
      <div className="container">
        <div className="flight-search">
          <div className="responsive-detail">
            <div className="destination">
              <span>dubai</span>
              <span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
              <span>paris</span>
            </div>
            <div className="details">
              <span>tue, 19-Aug-2019</span>
              <span className="divider">|</span>
              <span>2 Adults</span>
            </div>
            <div className="modify-search">
              <a href="#" className="btn btn-solid color1" onClick={toggleForm}>
                modify search 
              </a>
            </div>
          </div>
          <div className={`flight-search-detail  ${formOpen ?" show":""}`}>
            <SearchForm toggleForm={toggleForm}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
