"use client";
import FlightClass from "@/components/common/booking-form/flight-form/flight-class";
import QtyBox from "@/components/common/booking-form/flight-form/qty-box";
import useOutsideDropdown from "@/utils/useOutsideDropdown";
import Image from "next/image";
import { FC, useState } from "react";

const SelectTraveler: FC = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <div className="form-group">
      <input type="text" className="form-control open-select" placeholder="traveler" value={selectedCity} onClick={() => setIsComponentVisible(!isComponentVisible)} />
      <img src="/assets/images/icon/user.png" className="img-fluid" alt="" />
      <div ref={ref} className={`selector-box-flight ${isComponentVisible ? "show" : ""}`}>
        <QtyBox />
        <FlightClass />
        <div className="bottom-part">
          <span className="btn border-0">apply</span>
        </div>
      </div>
    </div>
  );
};

export default SelectTraveler;
