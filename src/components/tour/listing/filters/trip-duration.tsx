import { tripDurationData } from "@/data/tour/tour-filter";
import { RootState } from "@/redux-toolkit/store";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TripDurationFilter: React.FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const tripDurationStatus = useSelector((state: RootState) => state.tourFilterReducer.tripDurationStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "tripDurationStatus", payload: [...tripDurationStatus, value] });
    } else {
      dispatch({ type: "tripDurationStatus", payload: tripDurationStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "tripDurationStatus", payload: tripDurationStatus });
  }, [tripDurationStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}>
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title">trip Duration</h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""}`}>
          <div className="collection-brand-filter">
            {tripDurationData.map((data: IFacilityProps,index) => {
              return (
                <div className="form-check collection-filter-checkbox" key={index}>
                  <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={tripDurationStatus.includes(data.type)} onChange={handleCheckboxChange} />
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
const MemoizedTripDurationFilter = React.memo(TripDurationFilter);

export default MemoizedTripDurationFilter;
