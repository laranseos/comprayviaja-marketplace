"use client";
import { CheckIn, CheckOut, Guests, Hotel, Search } from "@/constant/constant";
import { FC, useState } from "react";
import DatePickerComponent from "../date-picker";
import Button from "../btn";
import Link from "next/link";

const SearchBox: FC<ISearchBoxProps> = ({ classRound }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [guestCount, setGuestCount] = useState(1);
  return (
    <div className={`search-box ${classRound && "rounded10"}`}>
      <div className="left-part row">
        <div className="search-body title-hotel col-2">
          <h6>{Hotel}</h6>
          <input type="text" name="text" placeholder="dubai" className="form-control " />
        </div>
        <div className="search-body col-2 search-input">
          <h6>{CheckIn}</h6>
          <DatePickerComponent start={startDate} setStart={setStartDate} />
        </div>
        <div className="search-body col-2 search-input">
          <h6>{CheckOut}</h6>
          <DatePickerComponent start={startDate1} setStart={setStartDate1} />
        </div>
        <div className="search-body col-2">
          <h6>{Guests}</h6>
          <div className="qty-box">
            <div className="input-group">
              <span className="input-group-prepend">
                <button type="button" className="btn quantity-left-minus" data-type="minus" data-field="" onClick={() => setGuestCount(guestCount <= 1 ? guestCount : guestCount - 1)}>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </span>
              <input type="text" name="quantity" onChange={() => setGuestCount(guestCount)} className="form-control input-number" value={guestCount} />
              <span className="input-group-prepend">
                <button type="button" className="btn quantity-right-plus" data-type="plus" data-field="" onClick={() => setGuestCount(guestCount + 1)}>
                  <i className="fas fa-chevron-up"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="search-body btn-search col-2">
          <div className="right-part">
            <Link href="/hotel/single-page/left-sidebar" className="btn btn-solid">{Search}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
