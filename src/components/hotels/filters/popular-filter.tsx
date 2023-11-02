"use client";
import { FC, memo, useState } from "react";
import { PopularFilterConst } from "@/constant/constant";
import { popularFilter } from "@/data/hotels/filter-data";

const PopularFilter: FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="filter-block">
      <div className={`collection-collapse-block ${show ?"open":""}`}>
        <h6 className="collapse-block-title mt-0" onClick={() => setShow(!show)}>
          {PopularFilterConst}
        </h6>
        <div className={`collection-collapse-block-content ${show ?"d-none":""}`}>
          <div className="collection-brand-filter">
            {popularFilter.map((item: IFacilityProps,index) => (
              <div className="form-check collection-filter-checkbox" key={index}>
                <input type="checkbox" className="form-check-input" id={`pay-${item.id}`} />
                <label className="form-check-label" htmlFor={`pay-${item.id}`}>
                  {item.type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoizedPopularFilter = memo(PopularFilter);

export default MemoizedPopularFilter;

