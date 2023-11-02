import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductBox from "../elements/product-box/product-box";
import ListPage from "../elements/product-box/list-product-box";
import useFilterHotel from "@/utils/filters/useFilterHotel";
import useFilterTour from "@/utils/filters/useFilterTour";
import TourGridProduct from "../elements/product-box2/tour-grid-product";
import Pagination from "./pagination/page-layout";
import useFilterFlight from "@/utils/filters/useFilterFlight";
import FlightProductBox from "../elements/product-box3/flight-product-box";
import RoundTrip from "../elements/product-box/product-box4/round-trip";
import CabListProducts from "../elements/product-box4/cab-list";
import useFilterCab from "@/utils/filters/useFilterCab";
import CabGridProduct from "../elements/product-box-5/cab-grid";
import RestaurantProducts from "../elements/product-box-6/restaurant-product";
import useFilterRestaurant from "@/utils/filters/useFilterRestaurant";
import { IGridLayoutProps } from "./grid-page.d";

const GridLayout: FC<IGridLayoutProps> = ({ value, grid, type, view, trip }) => {
  const cardToShow = 6;
  const dispatch = useDispatch();

  const showProduct = type === "hotel" ? useFilterHotel({ value }) : type === "tour" ? useFilterTour({ value }) : type === "flight" ? useFilterFlight({ value }) : type === "cab" ? useFilterCab({ value }) : type === "restaurant" ? useFilterRestaurant({ value }) : [];
  const totalPages = Math.ceil(showProduct?.length / cardToShow);

  useEffect(() => {
    dispatch({ type: "productCount", payload: showProduct?.length });
  }, [dispatch, showProduct]);

  return (
    <>
      <div className={`product-wrapper-grid special-section grid-box  ${grid.gridStyle === "list-view" ? "container" : ""}`}>
        <div className={`row content grid ${grid.gridStyle === "list-view" ? "list-view" : ""}`}>
          {type === "tour" &&
            (showProduct as IBaseProps[]) // Explicitly type-cast to IBaseProps[] here
              ?.slice(cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage)
              .map((dataItems: IBaseProps, index) => {
                if (grid.gridStyle === "list-view") {
                  return <ListPage data={dataItems} view={view} type={type} key={index} />;
                } else {
                  return <TourGridProduct grid={grid} view={view} data={dataItems as IBaseProps} key={index} />;
                }
              })}

          {type === "hotel" &&
            (showProduct as IBaseProps[])?.slice(cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((dataItems: IBaseProps, i: number) => {
              if (grid.gridStyle === "list-view") {
                return type === dataItems.type && <ListPage data={dataItems} view={view} key={i} />;
              } else {
                return (
                  <div className={`${grid.gridSize === 3 && "col-xl-4"} ${grid.gridSize === 4 && "col-xl-3 col-lg-4"} col-sm-6 popular grid-item wow fadeInUp`} key={i}>
                    <ProductBox data={dataItems} view={view} key={dataItems.id} />
                  </div>
                );
              }
            })}

            {type === "restaurant" &&
              (showProduct)?.slice(cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((dataItems, i) => {
                if (grid.gridStyle === "list-view") {
                  return type === dataItems.type && <ListPage data={dataItems} view={view} key={i} />;
                } else {
                  return (
                    <div className={`${grid.gridSize === 3 && "col-xl-4"} ${grid.gridSize === 4 && "col-xl-3 col-lg-4"} col-sm-6 popular grid-item wow fadeInUp`} key={i}>
                      <RestaurantProducts data={dataItems} view={view} key={dataItems.id} />
                    </div>
                  );
                }
              })}

          {type === "cab" && grid.gridStyle === "list-view" ? (
            <CabListProducts data={showProduct as IBaseProps[]} cardToShow={cardToShow} grid={grid} />
          ) : type === "cab" ? (
            (showProduct as IBaseProps[])?.slice(cardToShow * grid.toPage - cardToShow, cardToShow * grid.toPage).map((dataItems: IBaseProps, i) => {
              return <CabGridProduct data={dataItems} grid={grid} key={i} view={view} />;
            })
          ) : (
            ""
          )}

          {type === "flight" && trip !== "round" ? <FlightProductBox data={showProduct as IBaseProps[]} cardToShow={cardToShow} grid={grid} /> : type === "flight" ? <RoundTrip data={showProduct as IBaseProps[]} cardToShow={cardToShow} grid={grid} /> : ""}
        </div>
      </div>

      <Pagination totalPages1={totalPages} />
    </>
  );
};

export default GridLayout;
