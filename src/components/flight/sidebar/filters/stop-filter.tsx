import StopsFilter from "@/components/common/filters/shop";
import React, { useState } from "react";

const StopFilter: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="filter-block">
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title" onClick={() => {setShow(!show);}}>Shop</h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""}`}>
          <div className="collection-brand-filter">
            <StopsFilter />
          </div>
        </div>
      </div>
    </div>
  );
};
const MemoizedStopFilter = React.memo(StopFilter);

export default MemoizedStopFilter;
