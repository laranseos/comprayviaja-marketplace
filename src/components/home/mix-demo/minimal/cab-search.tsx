import { Search } from "@/constant/constant";
// import DateTimePickerComp from "../date-time-picker";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import Link from "next/link";
import DateTimePickerComp from "@/components/common/date-time-picker";

const CabSearchTabs: FC = () => {
  return (
    <div className="search-panel">
      <h2 className="title-top">hire cab for any kind of trip</h2>
      <div className="search-section">
        <div className="flight-search">
          <div className={`flight-search-detail `}>
            <form className="row m-0">
              <div className="col">
                <div className="form-group">
                  <label className="font-xs-white">pick up location</label>
                  <input
                    type="text"
                    className="form-control open-select"
                    id="exampleInputEmail1"
                    placeholder="pick up"
                  />
                  <Img
                    src="/assets/images/icon/from.png"
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label className="font-xs-white">drop off location</label>
                  <input
                    type="text"
                    className="form-control open-select"
                    placeholder="drop off"
                  />
                  <Img
                    src="/assets/images/icon/location.png"
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label className="font-xs-white">pick up</label>
                  <div className="input-group">
                    <DateTimePickerComp />
                  </div>
                </div>
              </div>
              <div id="dropdate" className="col">
                <div className="form-group">
                  <label className="font-xs-white">drop off</label>
                  <DateTimePickerComp />
                </div>
              </div>
              <div className="col search-col">
                <div className="search-btn">
                  <Link
                    href="/cab/listing/list-view/left-sidebar"
                    className="btn btn-solid color1"
                  >
                    {Search}
                  </Link>
                </div>
              </div>
              <div className="responsive-close">
                <i className="far fa-times-circle" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabSearchTabs;
