"use client";
import { slide7 } from "@/components/common/slider-options";
import { topScheduleData } from "@/data/flight/sidebar";
import Img from "@/utils/BackgroundImageRatio";
import { FC, useState } from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";
import NoSsr from "@/utils/HOC/NoSsr";
interface FlightInterFace {
  setShowFilter: (val: boolean) => void;
  showFilter: boolean;
}
const FullCalendarComponent = dynamic(
  () => import("@/components/common/calender/full-calender"),
  { ssr: false }
);

const FlightTopSchedule: FC<FlightInterFace> = ({
  setShowFilter,
  showFilter,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="col-lg-12 ratio3_2">
      <a
        href="#"
        className="mobile-filter border-top-0"
        onClick={() => setShowFilter(!showFilter)}
      >
        <h5>latest filter</h5>
        <Img
          src="/assets/images/icon/adjust.png"
          className="img-fluid "
          alt=""
        />
      </a>
      <div className="top-bar-flight">
        <div className="date-fare-slider">
          <NoSsr>
            <Slider {...slide7} className="fare-6">
              {topScheduleData.map((data, index) => (
                <div key={index}>
                  <a href="#">
                    <div className="fare-box">
                      <h5 className="date">{data.date}</h5>
                      <h6 className="fare">{data.rate}</h6>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </NoSsr>
        </div>
        <div className="fare-calender">
          <div onClick={toggle}>
            <i className="far fa-calendar-alt"></i>
            <h6 className="title">fare calender</h6>
          </div>
          <div className={`calender-external `}>
            <FullCalendarComponent modal={modal} toggle={toggle} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightTopSchedule;
