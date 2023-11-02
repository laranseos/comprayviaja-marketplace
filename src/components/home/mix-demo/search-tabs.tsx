import { CabSvg, FlightSvg, FoodSvg, HolidaySvg, HotelSvg } from "@/data/svg/mix-demo-svg";
import React, { FC, Fragment, useState } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";

const SearchTabs: FC<ISearchTabProps> = ({ callbackActive, svg }) => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <Fragment>
      <Nav tabs className="nav mix-pills nav-pills mb-3" id="top-tab" role="tablist">
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => {
              setActiveTab("1");
              callbackActive("1");
            }}>
            {svg && <HotelSvg />}
            Hotel
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => {
              setActiveTab("2");
              callbackActive("2");
            }}>
            {svg && <HolidaySvg />}
            Holiday
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "3" ? "active" : ""}
            onClick={() => {
              setActiveTab("3");
              callbackActive("3");
            }}>
            {svg && <FlightSvg />}
            Flight
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "4" ? "active" : ""}
            onClick={() => {
              setActiveTab("4");
              callbackActive("4");
            }}>
            {svg && <CabSvg />}
            Cab
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem className="bg-light-success">
          <NavLink
            className={activeTab === "5" ? "active" : "txt-success"}
            onClick={() => {
              setActiveTab("5");
              callbackActive("5");
            }}>
            {svg && <FoodSvg />}
            Food
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
      </Nav>
    </Fragment>
  );
};
export default SearchTabs;
