import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import LatestFilters from "@/components/hotels/filters/latest-filter";
import { IGridListProps } from "./grid-page.d";

const GridList: FC<IGridListProps> = ({ callTourModal, tourModalOpen, topFilter, value, mapModal, grid4Img, setMapModal, type, side, gridSelect }) => {
  const dispatch = useDispatch();
  const [mapModalOpen, setMapModalOpen] = useState(false);

  return (
    <div className="right-panel">
      {type === "tour" &&
        callTourModal && ( 
          <a className="view-map" onClick={() => callTourModal(!tourModalOpen)}>
            <i className="fas fa-search"></i> find tours
          </a>
        )}
      {topFilter && side === "no" && <LatestFilters value={value} filterStyle="horizontal" type={type} />}
      {mapModal && (
        <>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter"
            onClick={() => {
              setMapModal && setMapModal(!mapModalOpen); 
              setMapModalOpen(!mapModalOpen);
            }}
            className="view-map">
            view on map <span className="arrow">click to view</span>
          </a>
        </>
      )}
      {!gridSelect && (
        <div className="collection-grid-view">
          <ul className="filter-select">
            <li onClick={() => dispatch({ type: "gridSize", payload: 2 })}>
              <a href="#" className="product-4-layout-view">
                <ul className="filter-select">
                  <li></li>
                  <li></li>
                </ul>
              </a>
            </li>
            <li onClick={() => dispatch({ type: "gridSize", payload: 3 })}>
              <a href="#" className="product-4-layout-view">
                <ul className="filter-select">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </a>
            </li>
            {grid4Img && (
              <li onClick={() => dispatch({ type: "gridSize", payload: 4 })}>
                <a href="#" className="product-4-layout-view">
                  <ul className="filter-select">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GridList;
