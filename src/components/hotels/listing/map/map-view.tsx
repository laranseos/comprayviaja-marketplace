"use client";
import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LatestFilters from "../../filters/latest-filter";
import GridLayout from "@/components/common/grid-page/grid-layout";
import CategoryPage from "@/components/common/filters/category";
import { RootState } from "@/redux-toolkit/store";

interface IMapViewProps {
  children?: ReactNode;
  value: IHotelProps[] | ITravelProps[] | IFlightProps[] | ICabProps[];
  side: string;
  gridType: string;
  type: string;
  gridOption?: boolean;
  size?: number;
}

const MapView: FC<IMapViewProps> = ({ children, value, side, gridType, type, gridOption, size }) => {
  const [view, setView] = useState(false)
  const [filteredMenu, setFilteredMenu] = useState<(IHotelProps | ITravelProps | IFlightProps | ICabProps)[] | undefined>();
  const grid = useSelector((state: RootState) => state.gridReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredMenu(value);
    dispatch({ type: "gridSize", payload: size });
  }, [value]);

  const getCategories = useCallback((data: []) => {
    setFilteredMenu(data);
  }, []);

  useEffect(() => {
    dispatch({ type: "gridStyle", payload: gridType });
  }, []);

  return (
    <>
      <section className="xs-section bg-inner map-sidebar">
        <div className="container-fluid">
          <div className="row">
            {!gridOption && (
              <div className="col-12 ">
                <div className="filter-panel right-filter">
                  <LatestFilters value={value} type={type} />
                  <div className="left-filter ms-auto">
                    <div className="respon-filter-btn">
                      <h6 onClick={()=>setView(!view)}>
                        filter  <i className="fas fa-sort-down"></i>
                      </h6>
                      <span className="according-menu"></span>
                    </div>
                    <div className={`filters respon-filter-content filter-button-group ${view?"show":""}`}>
                      <CategoryPage value={value} getCategories={getCategories} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {children && (<div className={`map-section map col-lg-6 ${side === "right" ? "order-1" : ""}`}>{children}</div>)}
            <div className={`ratio3_2 ${children ? "col-lg-6" : "col-lg-12"}`}>
              <GridLayout value={filteredMenu} grid={grid} type={type} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapView;
