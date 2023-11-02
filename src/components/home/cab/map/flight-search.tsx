"use client";

import Button from "@/components/common/btn";
import { Apply, Departure, From, Return, Search, SearchNow, To, Traveller } from "@/constant/constant";
import { FC, useState } from "react";
import QtyBox from "@/components/common/booking-form/flight-form/qty-box";
import FlightClass from "@/components/common/booking-form/flight-form/flight-class";
import DatePickerComponent from "@/components/common/date-picker";
interface FlightSearch {
  title?:boolean
}
const FlightSearch: FC<FlightSearch> = ({title}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  return (
    <div className="search-panel">
      {title &&  (<h2 className="title-top">deals on every flight you book</h2>)}
      <div className="search-section">
        <div className="search-box">
          <div className="left-part">
            <div className="search-body">
              <h6>{From}</h6>
              <input type="text" className="form-control open-select" id="exampleInputEmail1" value="dubai(DXB)" placeholder="from" />
            </div>
            <div className="search-body">
              <h6>{To}</h6>
              <input type="text" className="form-control open-select" value="paris(PAR)" placeholder="to" />
            </div>
            <div className="search-body">
              <h6>{Departure}</h6>
              <DatePickerComponent start={startDate} setStart={setStartDate} />
            </div>
            <div className="search-body">
              <h6>{Return}</h6>
              <DatePickerComponent start={startDate1} setStart={setStartDate1} />
            </div>
            <div className="search-body">
              <h6>{Traveller}</h6>
              <input type="text" className="form-control  open-select" value="1 traveller" placeholder="to" />
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
                <Button btnClass="btn btn-solid color1" name={SearchNow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;