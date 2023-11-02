"use client";
import { Apply } from "@/constant/constant";
import QtyBox from "../booking-form/flight-form/qty-box";
import { useState } from "react";

const RoomSelection = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="rooms-section">
      <input type="text" className="form-control open-select" placeholder="rooms & guests" onClick={() => setShow(!show)} />
      <div className={`selector-box ${show ? "show" : ""}`}>
        <QtyBox />
        <div className="bottom-part">
          <a href="#" className="add-room">
            add room +
          </a>

          <button onClick={() => setShow(false)} className="btn">
            {Apply}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
