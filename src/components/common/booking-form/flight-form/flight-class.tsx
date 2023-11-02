import { FC } from "react";
import { Business, Economy, Premium } from "@/constant/constant";

const FlightClass: FC = () => {
  return (
    <div className="flight-class">
      <div className="form-check">
        <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
        <label className="form-check-label" htmlFor="exampleRadios1">
          {Economy}
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
        <label className="form-check-label" htmlFor="exampleRadios2">
          {Premium}
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input radio_animated" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
        <label className="form-check-label" htmlFor="exampleRadios3">
          {Business}
        </label>
      </div>
    </div>
  );
};

export default FlightClass;
