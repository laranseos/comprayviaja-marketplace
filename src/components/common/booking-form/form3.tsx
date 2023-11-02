"use client";
import { useState, FC } from "react";
import { cityData } from "@/data/home/flight/flight-data";
import DatePickerComponent from "../date-picker";
import SelectCity from "@/components/common/booking-form/flight-form/select-city";
import SelectTraveler from "./flight-form/select-taraveler";
import SelectRoute from "./flight-form/select-route";

const FlightThree: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  return (
    <>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <SelectCity value="From" cityData={cityData} />
        <SelectCity value="To" cityData={cityData} />
        <div className="form-group row mb-0 flight-form-input">
          <div className="col">
            <div className="form-control">
              <DatePickerComponent setStart={setStartDate} start={startDate} />
            </div>
          </div>
          <div className="col">
            <div className="form-control">
              <DatePickerComponent setStart={setStartDate1} start={startDate1} />
            </div>
          </div>
          <div className="col">
            <SelectTraveler />
          </div>
        </div>
      </form>
      <SelectRoute />
    </>
  );
};

export default FlightThree;
