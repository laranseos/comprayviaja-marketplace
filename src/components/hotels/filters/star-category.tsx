import Rating from "@/components/common/rating";
import { star_category } from "@/data/hotels/filter-data";
import { RootState } from "@/redux-toolkit/store";
import { ChangeEvent, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StarCategoryFilter:React.FC = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const rateStatus = useSelector((state: RootState) => state.hotelFilterReducer.rateStatus);
  
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value =  event.target.value;
    const isChecked = event.target.checked;
    
    if (isChecked) {
      dispatch({ type: "rateStatus", payload: [...rateStatus, value] });
    } else {
      dispatch({ type: "rateStatus", payload: rateStatus.filter((selectedValue: string) => selectedValue !== value) });
    }
  };

  useEffect(() => {
    dispatch({ type: "rateStatus", payload: rateStatus });
  }, [rateStatus]);

  return (
    <div className="filter-block">
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title" onClick={() => setShow(!show)}>
          star category 
        </h6>
        <div className={`collection-collapse-block-content ${!show?"d-none":""}`}>
          <div className="collection-brand-filter">
            {star_category.map((data,index) => (
              <div className="form-check collection-filter-checkbox" key={data.id}>
                <input type="checkbox" className="form-check-input" id={data.rate} value={data.rate} checked={rateStatus.includes(data.rate)} onChange={handleCheckboxChange} />
                <label className="form-check-label rating" htmlFor={data.rate}>
                  <Rating rang={data.rang} />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const MemoizedStarCategoryFilter = memo(StarCategoryFilter);

export default MemoizedStarCategoryFilter;
