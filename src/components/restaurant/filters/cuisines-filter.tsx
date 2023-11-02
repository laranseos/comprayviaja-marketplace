import { districtData } from "@/data/hotels/filter-data";
import { cuisinesData } from "@/data/restaurant/filter";
import { RootState } from "@/redux-toolkit/store";
import React, { useState, ChangeEvent, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const CuisinesFilter: React.FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cuisinesStatus = useSelector((state: RootState) => state.restaurantFilerReducer.cuisinesStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "cuisinesStatus", payload: [...cuisinesStatus, value] });
    } else {
      dispatch({ type: "cuisinesStatus", payload: cuisinesStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "cuisinesStatus", payload: cuisinesStatus });
  }, [cuisinesStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}>
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title">Cuisines</h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""}`}>
          <div className="collection-brand-filter">
            {cuisinesData.map((data: IFacilityProps,index) => {
              return (
                <div className="form-check collection-filter-checkbox" key={index}>
                  <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={cuisinesStatus.includes(data.type)} onChange={handleCheckboxChange} />
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

const MemorizedCuisinesFilter = memo(CuisinesFilter)
export default MemorizedCuisinesFilter;
