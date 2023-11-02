import { capacityData } from "@/data/car/filter";
import { RootState } from "@/redux-toolkit/store";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Capacity: React.FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const capacityStatus = useSelector((state: RootState) => state.cabFilterReducer.capacityStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "capacityStatus", payload: [...capacityStatus, value] });
    } else {
      dispatch({ type: "capacityStatus", payload: capacityStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "capacityStatus", payload: capacityStatus });
  }, [capacityStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}>
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title">Capacity</h6>
        <div className="collection-collapse-block-content">
          <div className="collection-brand-filter">
            {capacityData.map((data: IFacilityProps,index) => {
              return (
                <div className="form-check collection-filter-checkbox" key={index}>
                  <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={capacityStatus.includes(data.type)} onChange={handleCheckboxChange} />
                  <label className="form-check-label" htmlFor={data.type}>
                    {data.type} {data.meta}
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
const MemoizedCapacity = React.memo(Capacity);
export default MemoizedCapacity;
