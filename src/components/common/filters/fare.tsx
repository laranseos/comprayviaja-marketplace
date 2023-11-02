import React, { FC } from "react";

const FareFilter: FC = () => {
  return (
    <>
      <div className="form-check collection-filter-checkbox">
        <input type="checkbox" className="form-check-input" id="refundable" />
        <label className="form-check-label" htmlFor="refundable">
          refundable
        </label>
      </div>
      <div className="form-check collection-filter-checkbox">
        <input type="checkbox" className="form-check-input" id="non" />
        <label className="form-check-label" htmlFor="non">
          non-refundable
        </label>
      </div>
    </>
  );
};

const MemorizedFareFilter = React.memo(FareFilter);
export default MemorizedFareFilter;
