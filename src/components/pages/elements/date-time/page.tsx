"use client";
import { FC, useState } from "react";
import SelectCity from "@/components/common/booking-form/flight-form/select-city";
import RoomSelection from "@/components/common/booking-page/room-select";
import DatePickerComponent from "@/components/common/date-picker";
import DateTimePickerComp from "@/components/common/date-time-picker";
import TimePicker from "@/components/common/time-picker";
import TitleThree from "@/components/common/title/title-three";
import { Rica } from "@/constant/constant";
import { cityData } from "@/data/home/flight/flight-data";

const BodyContent: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="section-b-space bg-inner elements-date-time">
      <div className="container">
        <TitleThree classTitle="title-1" title={Rica} subTitle="date & time picker" />
        <div className="row">
          <div className="col-md-4">
            <label>Date Picker</label>
            <div className="form-control">
            <DatePickerComponent start={startDate} setStart={setStartDate} />
            </div>
          </div>
          <div className="col-md-4">
            <label>Time Picker</label>
            <TimePicker />
          </div>
          <div className="col-md-4">
            <label>Date & Time Picker</label>
            <div className="form-control">
            <DateTimePickerComp />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <label>Room & Guest</label>
            <RoomSelection />
          </div>
          <div className="col-md-6">
            <div className="suggestion_box">
              <div className="form-group">
                <label>Destination</label>
                <SelectCity value="To" cityData={cityData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
