import { airLinesData } from "@/data/flight/filter-data";
import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Airlines: React.FC = () => {
  const dispatch = useDispatch();
  const airlineStatus = useSelector((state: any) => state.flightFilterReducer.airlineStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "airlineStatus", payload: [...airlineStatus, value] });
    } else {
      dispatch({ type: "airlineStatus", payload: airlineStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "airlineStatus", payload: airlineStatus });
  }, [airlineStatus]);

  return (
    <>
      {airLinesData.map((data: IAllFiltersProps,index) => {
        return (
          <div className="form-check collection-filter-checkbox" key={index}>
            <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={airlineStatus.includes(data.type)} onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor={data.type}>
              {data.type}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Airlines;
