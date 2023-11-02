import Airlines from "@/components/common/filters/airlines";
import React, { useState } from "react";

const AirlinesFilter: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="filter-block"
      onClick={() => {
        setShow(!show);
      }}>
      <div className={`collection-collapse-block ${show ? "open" : ""}`}>
        <h6 className="collapse-block-title">Airline</h6>
        <div className={`collection-collapse-block-content ${!show ? "d-none" : ""}`}>
          <div className="collection-brand-filter">
            <Airlines />
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoizedAirlinesFilter = React.memo(AirlinesFilter);

export default MemoizedAirlinesFilter;
