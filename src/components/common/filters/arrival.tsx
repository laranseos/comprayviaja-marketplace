import { arriveTimeData } from "@/data/flight/filter-data";
import { RootState } from "@/redux-toolkit/store";
import React, { useState, ChangeEvent, useEffect } from "react";
import Img from "@/utils/BackgroundImageRatio";
import { useDispatch, useSelector } from "react-redux";

const ArriveFilter: React.FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const arriveStatus = useSelector((state: RootState) => state.flightFilterReducer.arriveStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "arriveStatus", payload: [...arriveStatus, value] });
    } else {
      dispatch({ type: "arriveStatus", payload: arriveStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "arriveStatus", payload: arriveStatus });
  }, [arriveStatus]);

  return (
    <>
      {arriveTimeData.map((data,index) => (
        <div className="form-check collection-filter-checkbox" key={index}>
          <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={arriveStatus.includes(data.type)} onChange={handleCheckboxChange} />
          <label className="form-check-label" htmlFor={data.type}>
          <Img src={data.img} className="me-1" />
            {data.title}
          </label>
        </div>
      ))}
    </>
  );
};

const MemoizedArriveFilter = React.memo(ArriveFilter);

export default MemoizedArriveFilter;
