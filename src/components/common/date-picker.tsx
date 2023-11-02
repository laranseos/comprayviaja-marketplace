import { FC } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IDatePickerProps {
  setStart: Function;
  start: Date;
}

const DatePickerComponent: FC<IDatePickerProps> = ({ setStart, start }) => {
  return <ReactDatePicker selected={start} onChange={(date: Date) => setStart(date)} id="datepicker" className="datepicker-main" dateFormat="dd MMMM" />;
};

export default DatePickerComponent;
