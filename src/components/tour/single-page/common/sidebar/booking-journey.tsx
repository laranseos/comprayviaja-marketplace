import { FC } from "react";
import Link from 'next/link';
import RoomSelection from "@/components/common/booking-page/room-select";
import { BookThisJourney } from "@/constant/constant";
import { selectedDateData } from "@/data/tour/single-page";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";

const BookingJourney: FC = () => {
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  return (
    <div className="single-sidebar">
      <div className="selection-section">
        <h4 className="title">{BookThisJourney}</h4>
        <div className="book-btn-section border-top-0">
          <div className="detail-top">
            <input type="text" id="firstName" className="form-control" placeholder="First name" />
            <input type="email" id="email" className="form-control" placeholder="Enter your email" />
            <input type="number" id="phone" className="form-control" placeholder="Phone Number" />
          </div>
          <RoomSelection />
          <div className="selector">
            <select>
              <option  disabled >
                Select your date
              </option>
              {selectedDateData.map((item,index) => (
                <option value={item.value} id={item.id} key={index}>
                  {item.option}
                </option>
              ))}
            </select>
          </div>
          <Link href={`${i18LangStatus}/tour/booking/booking-page`} className="btn btn-rounded btn-sm color1">start my journey</Link>
        </div>
      </div>
    </div>
  );
};

export default BookingJourney;
