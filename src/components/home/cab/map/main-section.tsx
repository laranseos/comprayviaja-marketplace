"use client";
import { FC, useState } from "react";
import CabSearch from "./cab-search";
import MapPage from "./map-page";
import CabBookingForm from "@/components/common/booking-form/form4";
import { DifferentLocation, SameLocation } from "@/constant/constant";

const MainSection: FC = () => {
  const [isSameLocation, setIsSameLocation] = useState(true);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "option2") {
      setIsSameLocation(false);
    } else {
      setIsSameLocation(true);
    }
  };

  return (
    <section className="cab-full">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-xl-9 col-lg-8 order-lg-1 p-0">
            <div className="map-cls" id="map">
              <MapPage />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 p-0">
            <div className="left-bar">
              <div className="flight-search">
                <div className="flight-search-detail">
                  <div className="location-option d-flex">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={isSameLocation} onChange={handleRadioChange} />
                      <label className="text-dark form-check-label" htmlFor="exampleRadios1">
                        {DifferentLocation}
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked={!isSameLocation} onChange={handleRadioChange} />
                      <label className="text-dark form-check-label" htmlFor="exampleRadios2">
                        {SameLocation}
                      </label>
                    </div>
                  </div>
                  <CabBookingForm isSameLocation={isSameLocation} />
                </div>
              </div>
              <CabSearch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
