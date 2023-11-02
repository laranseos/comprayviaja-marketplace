import { RootState } from "@/redux-toolkit/store";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

const FilterTags: FC = () => {
  const filterTags = useSelector((state: RootState) => state.hotelFilterReducer);
  const filterTourTags = useSelector((state: RootState) => state.tourFilterReducer);
  const flightFilterTag = useSelector((state: RootState) => state.flightFilterReducer);
  const cabFilterTag = useSelector((state: RootState) => state.cabFilterReducer);
  const dispatch = useDispatch();

  const StringConvert = (str: string) => {
    return str.replace(/([A-Z])/g, " $1").trim();
  };
  const removeFilter = (key: string, value: string) => {
    if (key === "price") {
      dispatch({ type: key, payload: [] });
    } else {
      if (key in filterTags) {
        dispatch({ type: key, payload: filterTags[key].filter((val: string) => val !== value) });
      } else if (key in filterTourTags) {
        dispatch({ type: key, payload: filterTourTags[key].filter((val: string) => val !== value) });
      } else if (key in flightFilterTag) {
        dispatch({ type: key, payload: flightFilterTag[key].filter((val: string) => val !== value) });
      } 
      else if (key in cabFilterTag) {
        dispatch({ type: key, payload: cabFilterTag[key].filter((val: string) => val !== value) });
      }
    }
  };

  const renderTag = (key: string, value: number | Object | any, index:number = 0) => {
    const updatedKey = StringConvert(key);
    const displayKey = updatedKey.replace(" Status", "");

    if (displayKey === "price") {
      const displayValue = `Min: ${value.min}, Max: ${value.max}`;

      return (
        <div className="filter-tag" key={key}>
          {displayValue && ` ${displayValue}`}
        </div>
      );
    }
    if (displayKey === "departure") {
      const modifiedPayload = value.replace(/dxb/g, "");
      return (
        <div className="filter-tag" key={key}>
          {`${displayKey}: ${modifiedPayload}`}
        </div>
      );
    }

    const tagValue = Array.isArray(value) ? value.join(", ") : String(value);

    if (!tagValue) {
      return null;
    }

    return (
      <div className="filter-tag" key={key+index}>
        {`${displayKey}: ${tagValue}`}
        <button className="btn-close" aria-label="Close" onClick={() => removeFilter(key, value)}></button>
      </div>
    );
  };

  const allTags: [string, string][] = [...Object.entries(filterTags), ...Object.entries(filterTourTags), ...Object.entries(flightFilterTag), ...Object.entries(cabFilterTag)
  ];

  
  return (
    <ul className="product-filter-tags">
      {allTags.map(([key, value]) => (
        <li className="me-2" key={key}>
          {Array.isArray(value) ? value.map((item: any, index) => renderTag(key, item, index)) : renderTag(key, value)}
        </li>
      ))}
    </ul>
  );
};

export default FilterTags;
