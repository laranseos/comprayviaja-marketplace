import { useState } from "react";
import DatePickerComponent from "@/components/common/date-picker";
import Button from "@/components/common/btn";
import { Search } from "@/constant/constant";
import Link from 'next/link';

const SearchMinimal: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());

  return (
    <div className="home-content mix-layout ">
      <div className="bg-transparent">
        <div className="flight-search">
          <div className="flight-search-detail form-icon p-0">
            <form className="row m-0" onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
              <div className="col p-0">
                <div className="form-group">
                  <input type="text" name="text" placeholder="select location, hotel.." className="form-control " />
                  <i className="fas fa-hotel icon"></i>
                </div>
              </div>
              <div className="col p-0">
                <div className="form-group">
                  {/* <DatePickerComponent start={startDate} setStart={setStartDate} /> */}
                  <input type="text" name="text" placeholder="Check-in"className="form-control" />
                  <i className="fas fa-calendar-alt icon"></i>
                </div>
              </div>
              <div className="col p-0">
                <div className="form-group">
                  {/* <DatePickerComponent start={startDate1} setStart={setStartDate1} /> */}
                  <input type="text" name="text" placeholder="Check-out"className="form-control" />
                  <i className="fas fa-calendar-alt icon"></i>
                </div>
              </div>
              <div id="dropdate" className="col p-0">
                <div className="form-group rooms-section">
                  <input type="text" className="form-control open-select" placeholder="rooms & guests" />
                  <i className="fas fa-user-alt icon"></i>
                </div>
              </div>
              <div className="col search-col p-0">
                <div className="search-btn">
                  <Link href="/hotel/single-page/left-sidebar" className="btn btn-solid color1">search</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMinimal;
