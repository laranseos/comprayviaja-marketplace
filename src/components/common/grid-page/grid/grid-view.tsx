"use client";
import { FC, useCallback, useEffect, useState } from "react";
import GridList from "@/components/common/grid-page/grid-list";
import GridLayout from "@/components/common/grid-page/grid-layout";
import Filters from "../../../hotels/filters/page";
import FilterTags from "../../../hotels/filters/filter-tags";
import { useDispatch, useSelector } from "react-redux";
import FlightTopSchedule from "@/components/flight/sidebar/common/flight-top-schedule";
import TopFilter from "@/components/flight/sidebar/filters/top-filter";
import FormOne from "@/components/common/booking-form/form1";
import CategoryPage from "@/components/common/filters/category";
import { RootState } from "@/redux-toolkit/store";
import { IGridReducerProps } from "../grid-page.d";

const GridView: FC<IGridViewProps> = ({ gridSelect, topFilter, size, gridOption, trip, gridType, side, value, schedule, mapModal, grid4Img, setMapModal, children, type, view,latestFilter }) => {
  const dispatch = useDispatch();
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const grid = useSelector((state: RootState) => state.gridReducer);
  const [showSidebar, setShowSidebar] = useState(false)
  const [filteredMenu, setFilteredMenu] = useState<(IHotelProps | ITravelProps | IFlightProps | ICabProps)[] | undefined>(value);

  const getCategories = useCallback((data: []) => {
    setFilteredMenu(data);
  }, []);

  const callTourModal = useCallback((tour: boolean) => {
    setTourModalOpen(tour);
  }, []);

  useEffect(() => {
    setFilteredMenu(value);
  }, [value]);

  useEffect(() => {
    dispatch({ type: "gridSize", payload: size });
    dispatch({ type: "gridStyle", payload: gridType });
  }, []);
const [showDropDown, setShowDropDown] = useState(false)
  return (
    <section className="xs-section bg-inner">
      <div className="container">
        <div className="row">
          {topFilter && type === "flight" ? (
            <div className="col-12">
              {" "}
              <TopFilter value={filteredMenu} setShowFilter={setShowSidebar} showFilter={showSidebar} />
            </div>
          ) : gridOption ? (
            <div className="col-12">
              <div className="filter-panel">
                <div className="left-filter">
                  <div className="respon-filter-btn">
                    <h6 onClick={()=>setShowDropDown(!showDropDown)}>filter <i className="fas fa-sort-down"></i></h6>
                    <span className="according-menu"></span>
                  </div>
                  <div className={`filters respon-filter-content filter-button-group ${showDropDown ?" show":""} `}>
                      <CategoryPage value={value} getCategories={getCategories} />
                  </div>
                 
                </div>
                <GridList callTourModal={callTourModal} gridSelect={gridSelect} tourModalOpen={tourModalOpen} view={view} grid={grid as unknown as IGridReducerProps} gridStyle={gridType} topFilter={topFilter} value={value} side={side} grid4Img={grid4Img} mapModal={mapModal} setMapModal={setMapModal} type={type} />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={`col-xl-12 onclick-map ${tourModalOpen ? "show" : ""}`}>
            <div className="book-table single-table bg-inner">
              <div className="table-form classic-form">
                <FormOne />
              </div>
            </div>
          </div>
          {children}
          {!topFilter && side !== "no" && (
            <div className={`col-lg-3 ${side === "right" ? "order-1" : ""}`}>
              <Filters value={value} type={type} setShowFilter={setShowSidebar} showFilter={showSidebar}  />
            </div>
          )}
          <div className={`${topFilter ? "col-lg-12" : side === "no" ? "col-lg-12" : "col-lg-9"} ratio3_2 `}>
            {!latestFilter &&<a href="#javascript" className="mobile-filter border-top-0" onClick={()=>setShowSidebar(!showSidebar)}>
            <h5>latest filter</h5>
            <img src="/assets/images/icon/adjust.png" className="img-fluid blur-up lazyloaded" alt="" />
            </a>}
            <FilterTags />
            {schedule && <FlightTopSchedule setShowFilter={setShowSidebar} showFilter={showSidebar} />}
            <GridLayout grid={grid} value={filteredMenu} type={type} view={view} trip={trip} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridView;