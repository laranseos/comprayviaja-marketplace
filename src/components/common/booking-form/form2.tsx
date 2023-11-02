"use client";
import { FC, Fragment, useState } from "react";
import DatePickerComponent from "../date-picker";
import TimePicker from "../time-picker";

const FormTwo: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Fragment>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="from" />
          <img src="/assets/images/icon/from.png" className="img-fluid" alt="" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail" placeholder="to" />
          <img src="/assets/images/icon/location.png" className="img-fluid" alt="" />
        </div>
        <div className="form-group row cab-modern-form">
          <div className="col form-control">
            <DatePickerComponent setStart={setStartDate} start={startDate} />
          </div>
          <div className="col">
            <TimePicker />
          </div>
        </div>
      </form>
      <form className="radio-form" onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <input id="radio-1" type="radio" name="gender" value="in city" defaultChecked />
        <label htmlFor="radio-1" className="radio-label">
          in city
        </label>
        <input id="radio-2" type="radio" name="gender" value="out of city" />
        <label htmlFor="radio-2" className="radio-label">
          out of city
        </label>
      </form>
    </Fragment>
  );
};

export default FormTwo;
