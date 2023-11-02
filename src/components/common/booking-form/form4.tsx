"use client";
import { FC, useState } from "react";
import Img from "@/utils/BackgroundImageRatio";
import Button from "../btn";
import { BookNow, DropOff, DropOffDate, PickUp, PickUpDate, PickUpTime } from "@/constant/constant";
import DatePickerComponent from "../date-picker";
import TimePicker from "../time-picker";
import Link from 'next/link';

const CabBookingForm: FC<ICabBookingProps> = ({ isSameLocation }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  return (
    <>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <div className="form-group">
          <label>{PickUp}</label>
          <input type="text" className="form-control open-select" id="exampleInputEmail1" placeholder="pick up" />
          <Img src="/assets/images/icon/from.png" className="img-fluid " alt="" />
        </div>
        <div className="form-group">
          <label>{DropOff}</label>
          <input type="text" className="form-control open-select" placeholder="drop off" />
          <Img src="/assets/images/icon/location.png" className="img-fluid" alt="" />
        </div>
        <div className="form-group">
          <label>{PickUpDate}</label>
          <div className="form-control">
            <DatePickerComponent start={startDate} setStart={setStartDate} />
          </div>
        </div>
        <div className="form-group">
          <label>{PickUpTime}</label>
          <TimePicker />
        </div>
        {isSameLocation && (
          <div className="form-group">
            <label>{DropOffDate}</label>
            <div className="form-control">
              <DatePickerComponent start={startDate1} setStart={setStartDate1} />
            </div>
          </div>
        )}
        <div className="search-btn">
          <Link href="/cab/booking" className="btn btn-solid color1">book now</Link>
        </div>
      </form>
    </>
  );
};

export default CabBookingForm;
