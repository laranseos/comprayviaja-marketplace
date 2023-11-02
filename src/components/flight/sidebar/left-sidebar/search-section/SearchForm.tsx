import FlightClass from "@/components/common/booking-form/flight-form/flight-class";
import QtyBox from "@/components/common/booking-form/flight-form/qty-box";
import Button from "@/components/common/btn";
import DatePickerComponent from "@/components/common/date-picker";
import { Apply, Departure, From, Return, Search, To, TravellerClass } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import { useState } from "react";
import Link from "next/link";

interface  SearchForm {
  toggleForm?:()=>void
}

const SearchForm = ({toggleForm}:SearchForm) => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
  
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()} className="row m-0 flight-form-input">
              <div className="col-lg-2">
                <div className="form-group">
                  <label>{From}</label>
                  <input type="text" className="form-control open-select" id="exampleInputEmail1" defaultValue="dubai(DXB)" placeholder="from" />
                  <Img src="/assets/images/icon/from.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <label>{To}</label>
                  <input type="text" className="form-control open-select" defaultValue="paris(PAR)" placeholder="to" />
                  <Img src="/assets/images/icon/location.png" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <label>{Departure}</label>
                  <div className="form-control">
                  <DatePickerComponent start={startDate} setStart={setStartDate} />
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <label>{Return}</label>
                  <div className="form-control">
                  <DatePickerComponent start={startDate1} setStart={setStartDate1} />
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="form-group">
                  <label>{TravellerClass}</label>
                  <input type="text" className="form-control  open-select" defaultValue="1 traveller" placeholder="to" />
                  <Img src="/assets/images/icon/user.png" className="img-fluid" alt="" />
                  <div className="selector-box-flight">
                    <QtyBox />
                    <FlightClass />
                    <div className="bottom-part">
                      <Button btnClass="btn btn-solid color1" name={Apply} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="search-btn">
                  <Link href="/flight/listing/left-sidebar"><Button btnClass="btn btn-solid color1" name={Search} /></Link>
                </div>
              </div>
              <div className="responsive-close" onClick={toggleForm}>
                <i className="far fa-times-circle"></i>
              </div>
            </form>
  )
}

export default SearchForm
