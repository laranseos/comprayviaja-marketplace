import { HostLanguage } from "@/constant/constant";
import { hostLang } from "@/data/hotels/filter-data";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HostLanguageFilter: React.FC = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const hostLangStatus = useSelector((state: any) => state.hotelFilterReducer.hostLangStatus);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch({ type: "hostLangStatus", payload: [...hostLangStatus, value] });
    } else {
      dispatch({ type: "hostLangStatus", payload: hostLangStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "hostLangStatus", payload: hostLangStatus });
  }, [hostLangStatus]);

  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}>
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title" onClick={() => setShow(!show)}>
          {HostLanguage}
        </h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""}`}>
          <div className="collection-brand-filter">
            {hostLang.map((data: IFacilityProps,index) => {
              return (
                <div className="form-check collection-filter-checkbox" key={index}>
                  <input type="checkbox" className="form-check-input" id={data.type} value={data.type} checked={hostLangStatus.includes(data.type)} onChange={handleCheckboxChange} />
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

export default HostLanguageFilter;
