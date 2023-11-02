"use client";
import { PopularCities } from "@/constant/constant";
import useOutsideDropdown from "@/utils/useOutsideDropdown";
import Image from "next/image";
import { FC, useState } from "react";

const SelectCity: FC<ISelectCityProps> = ({ value, cityData }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="form-group">
      <input type="text" className="form-control open-select" id="exampleInputEmail1" placeholder={value} defaultValue={selectedCity} onClick={() => setIsComponentVisible(!isComponentVisible)} />
      {value === "From" ? <img src="/assets/images/icon/from.png" className="img-fluid" alt="" /> : <img src="/assets/images/icon/location.png" className="img-fluid" alt="" />}
      <div ref={ref} className={`selector-box ${isComponentVisible ? "show" : ""}`}>
        <h6 className="title">{PopularCities}</h6>
        <ul>
          {cityData.map((data: ICityProps,index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => {
                  setSelectedCity(data.place);
                  setIsComponentVisible(false);
                }}>
                <h5>{data.place}</h5>
                <h6>{data.airport}</h6>
                <span>{data.button}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectCity;
