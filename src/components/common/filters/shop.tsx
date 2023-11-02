import { stopsData } from "@/data/flight/filter-data";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StopsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const stopStatus = useSelector((state: any) => state.flightFilterReducer.stopStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "stopStatus", payload: [...stopStatus, value] });
    } else {
      dispatch({ type: "stopStatus", payload: stopStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "stopStatus", payload: stopStatus });
  }, [stopStatus]);

  return (
    <>
      {stopsData.map((data: IAllFiltersProps,index) => {
        return (
          <div className="form-check collection-filter-checkbox" key={index}>
            <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={stopStatus.includes(data.type)} onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor={data.type}>
              {data.type}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default StopsFilter;
