import { departureTimeData } from "@/data/flight/filter-data";
import { RootState } from "@/redux-toolkit/store";
import Img from "@/utils/BackgroundImageRatio";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DepartureFilter: React.FC = () => {
  const dispatch = useDispatch();
  const departureStatus = useSelector((state: RootState) => state.flightFilterReducer.departureStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "departureStatus", payload: [...departureStatus, value] });
    } else {
      dispatch({ type: "departureStatus", payload: departureStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "departureStatus", payload: departureStatus });
  }, [departureStatus]);

  return (
    <>
      {departureTimeData.map((data: IAllFiltersProps,index) => {
        return (
          <div className="form-check collection-filter-checkbox" key={index}>
            <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={departureStatus.includes(data.type || "")} onChange={handleCheckboxChange} />
            <label className="form-check-label" htmlFor={data.type}>
              <Img src={data.img} className="p2" />
              {data.title}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default DepartureFilter;
