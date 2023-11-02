import { priceData1 } from "@/data/hotels/filter-data";
import { RootState } from "@/redux-toolkit/store";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface PriceStatus {
  min: number;
  max: number;
  [key: string]: number; // Index signature to allow any string key
}

const PriceFilter: React.FC = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const priceStatus = useSelector<RootState, PriceStatus>((state) => state.hotelFilterReducer.priceStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const [min, max] = value.split("-").map(Number);

    if (isChecked) {
      dispatch({ type: "priceStatus", payload: { ...priceStatus, [value]: { min, max } } });
    } else {
      const updatedPriceStatus = { ...priceStatus };
      delete updatedPriceStatus[value];
      dispatch({ type: "priceStatus", payload: updatedPriceStatus });
    }
  };

  useEffect(() => {
    dispatch({ type: "priceStatus", payload: { min: 100, max: 10000 } });
  }, []);

  const isChecked = (type: string) => priceStatus[type] !== undefined;

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}
    >
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title">Price</h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""} `}>
          <div className="collection-brand-filter">
            {priceData1.map((data: IFacilityProps,index) => (
              <div className="form-check collection-filter-checkbox" key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={data.type}
                  value={data.type}
                  checked={isChecked(data.type)}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={data.type}>
                  {data.type}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
