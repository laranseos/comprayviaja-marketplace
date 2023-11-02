import "react-datepicker/dist/react-datepicker.css";
import SearchBox from "@/components/common/search-box/page";

const SearchComponent: React.FC = () => {
  return (
    <div className="search-panel">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="search-panel shadow" id="searchBar">
              <div className="search-section ">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchComponent;
