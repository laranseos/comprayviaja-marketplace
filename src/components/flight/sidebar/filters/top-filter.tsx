import DepartureFilter from "./departure-filter";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Airlines from "@/components/common/filters/airlines";
import ArriveFilter from "@/components/common/filters/arrival";
import MemoizedStopFilter from "./stop-filter";
import MemorizedFareFilter from "@/components/common/filters/fare";
import { useSearchParams } from "next/navigation";
import PriceRange from "@/components/hotels/filters/price-range";

const TopFilter: FC<ITopFilterProps> = ({ value,setShowFilter,showFilter }) => {
  const [showFilterId, setShowFilterId] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const MIN = searchParams.get("min") ? parseInt(searchParams.get("min")!, 10) : null;
  const MAX = searchParams.get("max") ? parseInt(searchParams.get("max")!, 10) : null;
  let minPrice: IPriceProps | null = null;
  let maxPrice: IPriceProps | null = null;

  function isPricePropsArray(value: any[]): value is IPriceProps[] {
    return value.every((item) => typeof item?.price === "number");
  }
  if (Array.isArray(value) && isPricePropsArray(value)) {
    minPrice = value.reduce((res: IPriceProps | null, obj: IPriceProps) => {
      if (res === null || obj.price < res.price) {
        return obj;
      }
      return res;
    }, null);

    maxPrice = value.reduce((res: IPriceProps | null, obj: IPriceProps) => {
      if (res === null || obj.price > res.price) {
        return obj;
      }
      return res;
    }, null);
  }

  useEffect(() => {
    if (MIN === null && MAX === null) {
      dispatch({ type: "priceStatus", payload: { min: minPrice?.price, max: maxPrice?.price } });
    } else {
      dispatch({ type: "priceStatus", payload: { min: MIN, max: MAX } });
    }
  }, [dispatch, minPrice, maxPrice, MIN, MAX]);

  const filters: IFilterConfig[] = [
    { id: "stops", title: "stops", component: <MemoizedStopFilter /> },
    { id: "fare", title: "fare type", component: <MemorizedFareFilter /> },
    { id: "price", title: "price", component: <PriceRange min={minPrice?.price} max={maxPrice?.price} /> },
    { id: "airlines", title: "airlines", component: <Airlines /> },
    { id: "departure", title: "departure", component: <DepartureFilter /> },
    { id: "arrival", title: "arrival", component: <ArriveFilter /> },
  ];

  const handleFilterClick = (filterId: string) => {
    setShowFilterId(filterId === showFilterId ? null : filterId);
  };

  return (
    <div className="col-12">
      <div className="top-filter-section" style={{left:showFilter?"-1px":""}}>
        <ul>
          <li className="back-btn" onClick={()=>setShowFilter(!showFilter)}>
            <div className="mobile_back text-end">
              <span>Back</span>
              <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
            </div>
          </li>
          <li className="filter-title">
            <h6>filter :</h6>
          </li>
          {filters.map((filter,index) => (
            <li className={`onclick-title ${filter.id === showFilterId ? "show" : ""}`} key={index} onClick={() => handleFilterClick(filter.id)}>
              <h6>{filter.title}</h6>
              <div className="onclick-content">{filter.component}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopFilter;
