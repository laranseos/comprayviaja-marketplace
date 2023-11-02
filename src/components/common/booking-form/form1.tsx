"use client";
import { FC, useState } from "react";
import Button from "../btn";
import DatePickerComponent from "../date-picker";
import { Search } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link';

const FormOne: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
      <div className="row w-100">
        <div className="form-group col p-0">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Starting from" />
          <Img src="/assets/images/icon/table-no.png" className="img-fluid " alt="" />
        </div>
        <div className="form-group col p-0">
          <input type="text" className="form-control" placeholder="Going to" />
          <Img src="/assets/images/icon/table-no.png" className="img-fluid " alt="" />
        </div>
        <div className="form-group col p-0 custom-tour-input">
          <div className="form-control"><DatePickerComponent start={startDate} setStart={setStartDate} /></div>
          <Img src="/assets/images/icon/table-no.png" className="img-fluid " alt="" />
        </div>
      </div>
      <Link href="/tour/single-page/left-sidebar"><Button btnClass="btn-rounded" name={Search} /></Link>
    </form>
  );
};

export default FormOne;
