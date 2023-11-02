"use client";
import { FC, useState } from "react";
import { cityData } from "@/data/home/flight/flight-data";
import SelectCity from "@/components/common/booking-form/flight-form/select-city";
import LocationOption from "@/components/common/booking-form/flight-form/location-option";
import DatePickerComponent from "@/components/common/date-picker";
import SelectTraveler from "@/components/common/booking-form/flight-form/select-taraveler";
import { Departure, Return } from "@/constant/constant";

const MinimalFlightForm: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const handleOptionChange = (isRoundTrip: boolean) => {
    setIsRoundTrip(isRoundTrip);
  };

  return (
    <>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <LocationOption isRoundTrip={isRoundTrip} onOptionChange={handleOptionChange} />
        <SelectCity value="From" cityData={cityData} />
        <SelectCity value="To" cityData={cityData} />
        <div className="form-group row mb-0 flight-form-input">
          <div className="col">
            <div className="form-control">
              <DatePickerComponent setStart={setStartDate} start={startDate} />
            </div>
          </div>
          {isRoundTrip && (
          <div className="col">
            <div className="form-control">
              <DatePickerComponent setStart={setStartDate1} start={startDate1} />
            </div>
          </div>
          )}
          <div className="col">
            <SelectTraveler />
          </div>
        </div>
      </form>
    </>
  );
};

export default MinimalFlightForm;
