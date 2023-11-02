"use client";
import { useRef, useEffect, useState, useCallback, FC } from "react";
import { TimepickerUI } from "timepicker-ui";

interface IDetailProps {
  hour: number;
  minutes: number;
  type: number;
}

const TimePicker: FC = () => {
  const tmRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>("12:00 PM");

  const testHandler = useCallback(({ detail: { hour, minutes, type } }: CustomEvent<IDetailProps>) => {
    setInputValue(`${hour}:${minutes} ${type}`);
  }, []);

  useEffect(() => {
    if (inputValue === "10:00 PM") {
      alert("You selected 10:00 PM");
    }
  }, [inputValue]);

  useEffect(() => {
    const tm = tmRef.current as any;

    const newPicker = new TimepickerUI(tm, {});
    newPicker.create();

    tm.addEventListener("accept", testHandler);

    return () => {
      tm.removeEventListener("accept", testHandler);
    };
  }, [testHandler]);

  return (
    <div className="timepicker-ui" ref={tmRef}>
      <input type="text" className="timepicker-ui-input form-control" defaultValue={inputValue} />
    </div>
  );
};

export default TimePicker;
