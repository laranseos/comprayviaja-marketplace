import SearchBox from "@/components/common/search-box/page";
import { BookRoomsHomesApts } from "@/constant/constant";

const SearchVector: React.FC = () => {
  return (
    <div className=" home-content mix-layout smaller-content">
      <div className="bg-transparent">
        <div id="sticky_cls">
          <div className="search-panel">
            <h2 className="title-top text-white">{BookRoomsHomesApts}</h2>
            <div className="search-section">
              <SearchBox classRound="rounded10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVector;
