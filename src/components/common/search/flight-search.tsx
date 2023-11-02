"use client";
import { Apply, Search } from "@/constant/constant";
import Button from "../btn";
import DatePickerComponent from "../date-picker";
import { FC, useState } from "react";
import QtyBox from "../booking-form/flight-form/qty-box";
import FlightClass from "../booking-form/flight-form/flight-class";

const FlightSearch: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  return (
    <div className="search-panel">
      <div className="search-section">
        <div className="search-box">
          <div className="left-part">
            <div className="search-body">
              <h6>from</h6>
              <input type="text" className="form-control open-select" id="exampleInputEmail1" value="dubai(DXB)" placeholder="from" />
            </div>
            <div className="search-body">
              <h6>to</h6>
              <input type="text" className="form-control open-select" value="paris(PAR)" placeholder="to" />
            </div>
            <div className="search-body">
              <h6>departure</h6>
              <DatePickerComponent setStart={setStartDate} start={startDate} />
            </div>
            <div className="search-body">
              <h6>return</h6>
              <DatePickerComponent setStart={setStartDate1} start={startDate1} />
            </div>
            <div className="search-body">
              <h6>traveler</h6>
              <input type="text" className="form-control  open-select" value="1 traveler" placeholder="to" />
              <div className="selector-box-flight">
                <QtyBox />
                <FlightClass />
                <div className="bottom-part">
                  <Button btnClass="btn" name={Apply} />
                </div>
              </div>
            </div>
            <div className="search-body btn-search">
              <div className="right-part">
                <Button btnClass="btn btn-solid color1" name={Search} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;
