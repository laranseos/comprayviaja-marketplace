import React from "react";
import SearchBox from "@/components/common/search-box/page";

const SearchHotel = () => {
  return (
    <div className="search-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="search-panel" id="searchBar">
              <div className="search-section shadow">
                <div className="search-box">
                  <div className="left-part">
                    <SearchBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHotel;
