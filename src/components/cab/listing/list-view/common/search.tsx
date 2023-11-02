import CabSearch from "@/components/common/search/cab-search";
import { FC, useState } from "react";

const Search: FC = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false)
  return (
    <div className="bg-inner small-section pb-0">
      <div className="container">
        <div className="flight-search">
          <div className="responsive-detail">
            <div className="destination">
              <span>paris</span>
              <span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
              <span>Toulouse</span>
            </div>
            <div className="details">
              <span>02:05, 19-Aug-2023</span>
              <span className="divider">|</span>
              <span>2 Adults</span>
            </div>
            <div className="modify-search">
              <a href="#" className="btn btn-solid color1"  onClick={()=>setSearchBarOpen(!searchBarOpen)}>
                modify search
              </a>
            </div>
          </div>
          <CabSearch resClass="res-cab" setSearchBarOpen={setSearchBarOpen} searchBarOpen={searchBarOpen} />
        </div>
      </div>
    </div>
  );
};

export default Search;
