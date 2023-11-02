"use client";
import { Adult } from "@/constant/constant";

import QuantityInput from "./qty-inputs";

const QtyBox: React.FC = () => {
  return (
    <div className="room-cls">
      <div className="qty-box">
        <label>{Adult}</label>
        <QuantityInput />
      </div>
      <div className="qty-box">
        <label>children</label>
        <QuantityInput />
      </div>
    </div>
  );
};

export default QtyBox;
