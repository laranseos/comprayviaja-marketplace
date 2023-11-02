"use client";
import { FC, useState } from "react";
import Button from "@/components/common/btn";
import DatePickerComponent from "@/components/common/date-picker";
import TitleComponent from "@/components/common/title/title";
import { Table } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link';

const BookTable: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="book-table section-b-space restaurant-table">
      <div className="container">
        <div className="row">
          <div className="col">
            <TitleComponent title={Table} titleClass="title-3 rounded white-title" subTitle="book table" span="booked" />
            <div className="table-form">
              <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
                <div className="row w-100">
                  <div className="form-group col p-0">
                    <input type="text" className="form-control" placeholder="Table no." />
                    <Img src="/assets/images/icon/table-no.png" className="img-fluid " alt="" />
                  </div>
                  <div className="form-group col p-0 custom-tour-input">
                    <div className="form-control">
                      <DatePickerComponent start={startDate} setStart={setStartDate} />
                      <Img src="/assets/images/icon/table-no.png" className="img-fluid " alt="" />
                    </div>
                  </div>
                  <div className="form-group col p-0">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Person" />
                    <Img src="/assets/images/icon/user.png" className="img-fluid " alt="" />
                  </div>
                </div>
                <Link href="/restaurant/booking/checkout"><Button btnClass="btn btn-rounded color1" name="BookTable" /></Link>
              </form>
            </div>
            <h3 className="detail">Don't wait for tasty food !!</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
