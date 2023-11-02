import { carOptionData } from "@/data/car/filter";
import { RootState } from "@/redux-toolkit/store";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CabOptionFilter: React.FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const cabOptionStatus = useSelector((state: RootState) => state.cabFilterReducer.cabOptionStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "cabOptionStatus", payload: [...cabOptionStatus, value] });
    } else {
      dispatch({ type: "cabOptionStatus", payload: cabOptionStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "cabOptionStatus", payload: cabOptionStatus });
  }, [cabOptionStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}>
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title">Car Option</h6>
        <div className="collection-collapse-block-content">
          <div className="collection-brand-filter">
            {carOptionData.map((data: IFacilityProps,index) => {
              return (
                <div className="form-check collection-filter-checkbox" key={index}>
                  <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={cabOptionStatus.includes(data.type)} onChange={handleCheckboxChange} />
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
const MemoizedCabOptionFilter = React.memo(CabOptionFilter);
export default MemoizedCabOptionFilter;
