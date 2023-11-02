"use client";
import { FC, useEffect, useState } from "react";
import Img from "@/utils/BackgroundImageRatio";
import HelpInfo from "../help-info";
import PriceRange from "./price-range";
import { LatestFilter } from "@/constant/constant";
import { useDispatch } from "react-redux";
import HotelFilter from "./hotel-filter";
import PopularFoodFilter from "@/components/restaurant/filters/popular-filter";
import { useSearchParams } from "next/navigation";
import { renderFiltersByType } from "@/utils/HOC/renderFiltersByType";
import MemoizedPopularFilter from "./popular-filter";

const Filters: FC<IFiltersProps> = ({ value, popular, type,setShowFilter,showFilter }) => {
  const [show, setShow] = useState(false);
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const MIN = searchParams.get("min")
    ? parseInt(searchParams.get("min")!, 10)
    : null;
  const MAX = searchParams.get("max")
    ? parseInt(searchParams.get("max")!, 10)
    : null;
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
      dispatch({
        type: "priceStatus",
        payload: { min: minPrice?.price, max: maxPrice?.price },
      });
    } else {
      dispatch({ type: "priceStatus", payload: { min: MIN, max: MAX } });
    }
  }, [dispatch, minPrice, maxPrice, MIN, MAX]);

  return (
    <div className="left-sidebar" style={{left:showFilter?"-1px":""}}>
      <div className="back-btn" onClick={()=>setShowFilter &&setShowFilter(!showFilter)}>back</div>
      <div className="search-bar">
        <input type="text" placeholder="Search here.." />
        <i className="fas fa-search"></i>
      </div>
      <div className={`middle-part collection-collapse-block ${show ? "" : "open"}`} >
        {popular || type === "hotel" ? (
          <>
            <a href="#javascript" className="section-title collapse-block-title">
              <h5>latest filter </h5>
              <Img src="/assets/images/icon/adjust.png" className="img-fluid" alt="" onClick={() => setShow(!show)}/>
            </a>
            <div className="collection-collapse-block-content ">
              <MemoizedPopularFilter />
              <div className="filter-block">
                <PriceRange min={minPrice?.price} max={maxPrice?.price} />
              </div>
              <HotelFilter />
            </div>
          </>
        ) : popular || type === "restaurant" ? (
          <div className="middle-part collection-collapse-block open p-0">
            <div className="collection-collapse-block-content ">
              <PopularFoodFilter />
              <div className="filter-block">
                <PriceRange min={minPrice?.price} max={maxPrice?.price} />
              </div>
              <HotelFilter />
            </div>
          </div>
        ) : (
          <>
            <div className="d-flex align-items-center justify-content-between">
              <h5>{LatestFilter}</h5>
              <Img src="/assets/images/icon/adjust.png" className="img-fluid" alt="" onClick={() => setShow(!show)}/>
            </div>
            <div className={`collection-collapse-block-content ${ show ? "hide-content" : ""}`} >{renderFiltersByType(type, minPrice, maxPrice)}</div>
          </>
        )}
      </div>
      {!popular && <HelpInfo />}
    </div>
  );
};

export default Filters;
