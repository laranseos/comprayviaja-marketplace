import { OneWay, RoundTrip } from "@/constant/constant";
import { FC } from "react";

const LocationOption: FC<LocationOptionProps> = ({ isRoundTrip, onOptionChange }) => {
  return (
    <div className="location-option d-flex">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={isRoundTrip} onChange={() => onOptionChange(true)} />
        <label className="text-dark form-check-label" htmlFor="exampleRadios1">
          {RoundTrip}
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          checked={!isRoundTrip} // Inverse of isRoundTrip
          onChange={() => onOptionChange(false)}
        />
        <label className="text-dark form-check-label" htmlFor="exampleRadios2">
          {OneWay}
        </label>
      </div>
    </div>
  );
};

export default LocationOption;
