"use client";
import { FC, useState } from "react";
import RangeInputFields from "@/components/common/filters/input-range";

const PriceRange: FC<IPrice> = ({ min, max }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="filter-block">
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title" onClick={() => setShow(!show)}>
          price range
        </h6>
        <div className={`collection-collapse-block-content ${show ? "d-none" : ""}`}>
          <RangeInputFields min={min ? min : 0} max={max ? max : 100} />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
