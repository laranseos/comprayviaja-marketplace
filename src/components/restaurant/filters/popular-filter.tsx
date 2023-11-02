import { popularData } from "@/data/restaurant/filter";
import { RootState } from "@/redux-toolkit/store";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PopularFoodFilter: React.FC = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const popularStatus = useSelector((state: RootState) => state.restaurantFilerReducer.popularStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "popularStatus", payload: [...popularStatus, value] });
    } else {
      dispatch({ type: "popularStatus", payload: popularStatus.filter((selectedValue) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "popularStatus", payload: popularStatus });
  }, [popularStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}>
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title">Popular</h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""} `}>
          <div className="collection-brand-filter">
            {popularData.map((data: IFacilityProps,index) => {
              return (
                <div className="form-check collection-filter-checkbox" key={index}>
                  <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={popularStatus.includes(data.type)} onChange={handleCheckboxChange} />
                  <label className="form-check-label" htmlFor={data.type}>
                    {data.type}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const MemoizedPopularFoodFilter = React.memo(PopularFoodFilter);
export default MemoizedPopularFoodFilter;
