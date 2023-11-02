"use client";
import Img from "@/utils/BackgroundImageRatio";
import DistrictFilter from "./district-filter";
import FacilityFilter from "./facility-filter";
import StarCategoryFilter from "./star-category";
import HostLanguageFilter from "./host-language";
import { FC, useState } from "react";
import PriceFilter from "./price-filter";
import TripDurationFilter from "@/components/tour/listing/filters/trip-duration";
import TravelFilter from "@/components/tour/listing/filters/travel";
import FlightFilter from "@/components/tour/listing/filters/flights";
import CabTypeFilter from "@/components/cab/listing/filters/cab-type";
import CabOptionFilter from "@/components/cab/listing/filters/cab-option";
import Capacity from "@/components/cab/listing/filters/capacity";
import PopularFoodFilter from "@/components/restaurant/filters/popular-filter";
import CuisinesFilter from "@/components/restaurant/filters/cuisines-filter";
import DeliveryFilter from "@/components/restaurant/filters/deliver-filter";

const LatestFilters: FC<IFiltersProps> = ({ filterStyle, type, value }) => {
  const [show, setShow] = useState(true);

  const applyFunc = () => {
    setShow(true);
  };
  return (
    <>
      <a href="#" className="filter_button filter-bottom-title" onClick={() => setShow(!show)}>
        <Img src="/assets/images/icon/adjust.png" className="img-fluid" alt="" />
        <h5>latest filter</h5>
      </a>
      <div className={`left-sidebar ${filterStyle !== "horizontal" ? "sidebar-popup" : "filter-bottom-content"}  ${show ? "" : "open"}`}>
        <div className={`middle-part collection-collapse-block ${show ? "" : "open"}`}>
          <div className="collection-collapse-block-content row">
            {type === "hotel" ? (
              <>
                <DistrictFilter />
                <FacilityFilter />
                <StarCategoryFilter />
                <PriceFilter />
                <HostLanguageFilter />
              </>
            ) : type === "tour" ? (
              <>
                <TripDurationFilter />
                <TravelFilter />
                <StarCategoryFilter />
                <PriceFilter />
                <FlightFilter />
              </>
            ) : type === "cab" ? (
              <>
                <CabTypeFilter />
                <StarCategoryFilter />
                <PriceFilter />
                <Capacity />
                <CabOptionFilter />
              </>
            ) : type === "restaurant" ? (
              <>
                <PopularFoodFilter />
                <CuisinesFilter />
                <StarCategoryFilter />
                <PriceFilter />
                <DeliveryFilter />
              </>
            ) : (
              ""
            )}
            <div className="text-end button_bottom">
              <button onClick={applyFunc} className="btn btn-solid color1 me-2 mb-1">
                apply
              </button>
              <button onClick={() => setShow(true)} className="btn btn-solid color1 close-filter-bottom mb-1">
                close filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestFilters;
