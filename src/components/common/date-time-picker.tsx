"use client";
import DatePickers from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const DateTimePickerComp: React.FC = () => {
  return (
    <>
      <DatePickers
        inputClass="form-control"
        placeholder="Select Date & Time"
        format="Date:YYYY/MM/DD, Time:HH:mm:ss"
        formattingIgnoreList={["Date", "Time"]}
        plugins={[<TimePicker position="top" />]}
      />
    </>
  );
};

export default DateTimePickerComp;
