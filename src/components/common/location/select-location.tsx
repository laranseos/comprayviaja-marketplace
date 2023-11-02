import { FC, useEffect, useState } from "react";
import { DifferentLocation, SameLocation } from "@/constant/constant";

interface ChildComponentProps {
  childResponseRef: React.RefObject<boolean>;
  onChildResponse: (response: boolean) => void;
}

const SelectLocation: FC<ChildComponentProps> = ({ childResponseRef, onChildResponse }) => {
  const [location, setLocation] = useState<boolean | null>(null);

  useEffect(() => {
    setLocation(true); // Set "DifferentLocation" as the default selected option
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === "true";
    setLocation(value);
    onChildResponse(value);
  };

  return (
    <div className="location-option d-flex">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="true" onChange={handleChange} checked={location === true} />
        <label className="text-dark form-check-label" htmlFor="exampleRadios1">
          {DifferentLocation}
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="false" onChange={handleChange} checked={location === false} />
        <label className="text-dark form-check-label" htmlFor="exampleRadios2">
          {SameLocation}
        </label>
      </div>
    </div>
  );
};

export default SelectLocation;
