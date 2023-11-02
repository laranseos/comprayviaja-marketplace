import { FC, useState } from "react";
import { Search } from "@/constant/constant";
import Button from "../btn";
import DatePickerComponent from "../date-picker";

const TourSearch: FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flight-search">
      <form className="flight-search-detail rounded10 row m-0" onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <div className="col-lg-3">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Starting from" />
            <img src="/assets/images/icon/table-no.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Going to" />
            <img src="/assets/images/icon/table-no.png" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group vector-tour-input">
            <div className="form-control">
              <DatePickerComponent setStart={setStartDate} start={startDate} />
            </div>
          </div>
        </div>
        <div className="col-lg-3 search-col">
          <div className="search-btn">
            <Button btnClass="btn btn-solid color1 lh-cls" name={Search} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TourSearch;